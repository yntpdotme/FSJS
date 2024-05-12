import express from 'express';

import {authorization, validateObjectId} from '../middlewares/index.js';
import {
  createTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodoById,
} from '../controllers/index.js';

const router = express.Router();

router
  .route('/')
  .get(authorization, getAllTodos)
  .post(authorization, createTodo);

router
  .route('/:id')
  .get(validateObjectId, authorization, getTodoById)
  .put(validateObjectId, authorization, updateTodoById)
  .delete(validateObjectId, authorization, deleteTodoById);

export default router;
