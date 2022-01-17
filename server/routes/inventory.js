const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("successful");
});

router.post("/test", (req, res) => {
    const product = req.body.name
    console.log(product);
  });

module.exports = router;
