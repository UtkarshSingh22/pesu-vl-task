const express = require("express");
const peopleController = require("../controllers/people.js");

const router = express.Router();

router.get("/get-count", peopleController.getCount);
router.post("/update-count", peopleController.updateCount);

module.exports = router;
