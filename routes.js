const express = require("express");
const router = express.Router();
const fileModule = require("./file-module");
const fs = require("fs");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.get("/data", (req, res) => {
  fileModule.readDataFromFile((err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(data);
    }
  });
});

router.post("/data", (req, res) => {
  const data = req.body;
  fs.writeFile("./data.json", JSON.stringify(data), (err) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ message: "Data successfully saved" });
    }
  });
});

router.put("/data", (req, res) => {
  const data = req.body;
  fs.appendFile("./data.json", JSON.stringify(data), (err) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ message: "Data successfully saved" });
    }
  });
});

router.delete("/data", (req, res) => {
  fs.unlink("./data.json", (err) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ message: "Data successfully deleted" });
    }
  });
});

router.post("/os-info", (req, res) => {
  fs.appendFile("./os-data.json", JSON.stringify(req.body), (err) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ message: "Data successfully saved" });
    }
  });
});

module.exports = router;
