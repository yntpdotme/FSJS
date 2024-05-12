import z from 'zod';

const todoCreateValidator = todo => {
  const schema = z.object({
    title: z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string',
      })
      .trim()
      .min(3, {message: 'Title must be 3 or more characters long'})
      .max(255, {message: 'Title must be 255 or fewer characters long'}),

    description: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
      })
      .trim()
      .min(3, {message: 'Description must be 3 or more characters long'})
      .max(1024, {message: 'Description must be 1024 or fewer characters long'}),
  });

  return schema.safeParse(todo);
};

const todoUpdateValidator = todo => {
  const schema = z.object({
    title: z
      .string({
        invalid_type_error: 'Title must be a string',
      })
      .trim()
      .min(3, {message: 'Must be 3 or more characters long'})
      .max(255, {message: 'Must be 255 or fewer characters long'})
      .optional(),

    description: z
      .string({invalid_type_error: 'Description must be a string'})
      .trim()
      .min(3, {message: 'Must be 3 or more characters long'})
      .max(1024, {message: 'Must be 1024 or fewer characters long'})
      .optional(),

    isComplete: z.boolean().optional(),
  });

  return schema.safeParse(todo);
};

export {
  todoCreateValidator as ValidateCreateTodo,
  todoUpdateValidator as ValidateUpdateTodo,
};
