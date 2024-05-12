import {useEffect, useState} from 'react';
import {CanceledError} from 'axios';

import {TodoService} from '@services';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const {request, cancel} = TodoService.getAllTodos();
    request
      .then(res => {
        setTodos(res.data.data);
      })
      .catch(error => {
        if (error instanceof CanceledError) return;

        let errorMessage = 'Error in Fetching Tasks. Please try again.';
        if (error?.response?.data?.message)
          errorMessage = error.response.data.message;

        setError(errorMessage);
      })
      .finally(() => {
        // Simulate loader delay for 0.5 seconds
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });

    return () => cancel();
  }, []);

  return {todos, error, isLoading, setTodos, setError};
};

export default useTodos;
