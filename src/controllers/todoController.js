const TodoModel = require('../models/todoModel');

exports.createTodo = async (req, res, next) => {
  try {
    const createModel = await TodoModel.create(req.body);
    res.status(201).json(createModel);
  } catch (error) {
    next(error);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const allTodo = await TodoModel.find({});
    res.status(200).json(allTodo);
  } catch (error) {
    next(error);
  }
};
