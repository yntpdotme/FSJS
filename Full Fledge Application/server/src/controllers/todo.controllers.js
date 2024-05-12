import {ApiError, ApiResponse, asyncHandler} from '../utils/index.js';
import {Todo, User} from '../models/index.js';
import {ValidateCreateTodo, ValidateUpdateTodo} from '../validators/index.js';

const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({createdBy: req.user._id})
    .populate('createdBy', 'name -_id')
    .select('-__v')
    .sort({isComplete: 1, title: 1});

  return res.json(new ApiResponse(200, todos, 'Todos fetched successfully'));
});

const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id).select('-__v');
  if (!todo) throw new ApiError(404, 'Todo with the given ID does not exist');

  return res.json(new ApiResponse(200, todo, 'Todo retrieved successfully'));
});

const createTodo = asyncHandler(async (req, res) => {
  const {error} = ValidateCreateTodo(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  const {title, description} = req.body;

  const todo = await Todo.create({
    title,
    description,
    createdBy: req.user._id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, todo, 'Todo created successfully'));
});

const updateTodoById = asyncHandler(async (req, res) => {
  const {error} = ValidateUpdateTodo(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  // Build the update object based on user input
  const updateObject = {};
  const {title, description, isComplete} = req.body;
  if (title) updateObject.title = title;
  if (description) updateObject.description = description;
  if (isComplete !== undefined) updateObject.isComplete = isComplete;

  const todo = await Todo.findByIdAndUpdate(req.params.id, updateObject, {
    new: true,
  });

  if (!todo) throw new ApiError(404, 'Todo with the given ID does not exist');

  return res
    .status(201)
    .json(new ApiResponse(201, todo, 'Todo updated successfully'));
});

const deleteTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) throw new ApiError(404, 'Todo with the given ID does not exist');

  return res
    .status(200)
    .json(
      new ApiResponse(200, {deletedTodo: todo}, 'Todo deleted successfully')
    );
});

export {getAllTodos, getTodoById, createTodo, updateTodoById, deleteTodoById};
