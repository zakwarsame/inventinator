/*
  Inventinator
  Copyright (c) 2022 zak<zakwarsamee@gmail.com>
  See LICENSE.txt for more information
*/

const Inventory = require("../models/Stock");
const router = require("express").Router();
const json2csv = require("json2csv").parse;

// fields used for csv exporting
const fields = ["title", "price", "quantity", "status", "tags"];

//  GET ITEMS BY ID
/**
 * return an item with the specific id
 * @param {*} req
 * @param {*} res,
 */

router.get("/find/:id", (req, res) => {
  Inventory.findById(req.params.id)
    .then((itemById) => res.status(200).json(itemById))
    .catch((err) => res.status(500).json(err));
});

// GET ALL ITEMS AND CAN FILTER QUERY
// if query is set to "new=true", returns new items and limits to 5
// if query is set to "tag=<item tag>" it filters and returns items with only that tag
/**
 * return all inventory
 * @param {*} req
 * @param {*} res,
 */

router.get("/", (req, res) => {
  const newItemQuery = req.query.new;
  const tagQuery = req.query.tag;

  let inventoryPromise;

  //if the query of "new" is set to true, the inventoryPromise variable is sorted by new and limited to 5
  if (newItemQuery) {
    inventoryPromise = Inventory.find().sort({ createdAt: -1 }).limit(5);
  } else if (tagQuery) {
    // else if the query of "tag" is set to a tag, the inventoryPromise variable is set to the tag if found
    inventoryPromise = Inventory.find({
      tags: {
        $in: [tagQuery.toLowerCase()],
      },
    });
  } else {
    inventoryPromise = Inventory.find();
  }

  inventoryPromise
    .then((allItems) => {
      res.status(200).json(allItems);
    })
    .catch((err) => res.status(500).json(err));
});

// CREATE ITEM

router.post("/", (req, res) => {
  const newItem = new Inventory(req.body);

  newItem
    .save()
    .then((createdItem) => {
      res.status(200).json(createdItem);
    })
    .catch((err) => res.status(500).json(err));
});

// UPDATE ITEM

router.put("/:id", (req, res) => {
  Inventory.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  )
    .then((updatedItem) => res.status(200).json(updatedItem))
    .catch((err) => res.status(500).json(err));
});

// DELETE ITEM
/**
 * delete an image by the specified id, takes in a url in the form of .../inventory/:id
 * @param {*} req
 * @param {*} res
 */

router.delete("/:id", (req, res) => {
  Inventory.findByIdAndDelete(req.params.id)
    .then((deletedItem) => res.status(200).json("Item successfully deleted"))
    .catch((err) => res.status(500).json(err));
});

// EXPORT TO CSV
/**
 * will find all items available and return them ready for csv export
 * @param {*} req
 * @param {*} res
 */

router.get("/export", (req, res) => {
  Inventory.find()
    .then((allItems) => {
      let csv;
      try {
        csv = json2csv(allItems, { fields });
      } catch (err) {
        return res.status(500).json(err);
      }

      res.header("Content-Type", "text/csv");
      res.attachment("data");
      return res.status(200).send(csv);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
