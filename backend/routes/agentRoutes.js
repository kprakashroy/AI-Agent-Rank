const express = require('express');
const { handleTask } = require('../controllers/agentController');
const router = express.Router();

router.post('/rank', handleTask);

module.exports = router;