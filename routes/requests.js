const express = require("express");
const router = express.Router();
const RequestsController = require("../controllers/requests");

router.post("/", RequestsController.handleRequest);

module.exports = router;
