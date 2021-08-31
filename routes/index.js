var express = require('express');
var router = express.Router();

const createUniqueFeedController = require("../controller/CreateUniqueFeedController");

router.get('/', createUniqueFeedController.create);

module.exports = router;