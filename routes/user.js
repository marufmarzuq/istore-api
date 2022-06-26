const router = require("express").Router();

router.post("/userpost", (req, res) => {
  console.log(req.body);
  res.send(req.body.uid);
});

module.exports = router;
