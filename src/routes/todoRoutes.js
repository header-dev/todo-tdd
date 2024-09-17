const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.get('/:todoId', todoController.getTodoById);

module.exports = router;
