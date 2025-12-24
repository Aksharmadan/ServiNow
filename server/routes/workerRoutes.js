const express = require("express");
const router = express.Router();
const Worker = require("../models/Worker");

router.get("/", async (req, res) => {
  const { service, city } = req.query;

  const workers = await Worker.find({
    service,
    city,
    available: true
  });

  res.json(workers);
});

module.exports = router;
