const express = require("express")

const { summaryController } = require("../controller/geminiController")

const router = express.Router()

// routes
router.post("/summary", summaryController);

module.exports = router