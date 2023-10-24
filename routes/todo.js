const express = require('express');
const router = express.Router();
const {createTodo, updateTodo, getAllTodo, getTodo , deleteTodo} = require('../controllers/todo');

router.route('/').post(createTodo).get(getAllTodo);
router.route('/:todoId').patch(updateTodo).get(getTodo).delete(deleteTodo);

module.exports =  router;