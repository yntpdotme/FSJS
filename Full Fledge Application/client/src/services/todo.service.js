import {clientPrivate as apiClient} from './apiClient';

const TodoService = {
  getAllTodos: () => {
    const controller = new AbortController();

    const request = apiClient.get('/todos', {
      signal: controller.signal,
    });

    return {request, cancel: () => controller.abort()};
  },

  deleteTodo: id => {
    return apiClient.delete('/todos/' + id);
  },

  createTodo(todo) {
    return apiClient.post('/todos/', todo);
  },

  updateTodo(todo) {
    return apiClient.put('/todos/' + todo._id, todo);
  },
};

export default TodoService;
