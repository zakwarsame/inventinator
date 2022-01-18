const Inventory = require("../models/Stock");
const router = require("express").Router();

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

router.delete("/:id", (req, res) => {
  Inventory.findByIdAndDelete(req.params.id)
    .then((deletedItem) => res.status(200).json("Item successfully deleted"))
    .catch((err) => res.status(500).json(err));
});

//  GET ITEMS BY ID

router.get("/find/:id", (req, res) => {
  Inventory.findById(req.params.id)
    .then((itemById) => res.status(200).json(itemById))
    .catch((err) => res.status(500).json(err));
});

// GET ALL ITEMS AND HAVE A FILTER QUERY

router.get("/", (req, res) => {
  const newItemQuery = req.query.new;
  const tagQuery = req.query.tag;

  let inventoryPromise;

  if (newItemQuery) {
    inventoryPromise = Inventory.find().sort({ createdAt: -1 }).limit(5);
  } else if (tagQuery) {
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


module.exports = router;
