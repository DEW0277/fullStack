const express = require('express');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/get', postController.getAll);
router.post('/create', postController.create);

module.exports = router;
