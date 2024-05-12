import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect} from 'react';

import {signInSchema, signUpSchema} from '@validators';
import './AuthForm.css';

const AuthForm = ({onSubmit, buttonText, isSignUp}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    setFocus,
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(isSignUp ? signUpSchema : signInSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    isSignUp ? setFocus('name') : setFocus('email');
  }, [isSignUp, setFocus]);

  const onSubmitHandler = async data => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      setError('message', {
        type: 'manual',
        message: errorMessage,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {isSignUp && (
        <>
          <input {...register('name')} type="text" placeholder="Name" />
          {errors.name?.message && (
            <p className="error">{errors.name.message}</p>
          )}
        </>
      )}
      <input {...register('email')} type="email" placeholder="Email" />
      {errors.email?.message && <p className="error">{errors.email.message}</p>}
      <input {...register('password')} type="password" placeholder="Password" />
      {errors.password?.message && (
        <p className="error">{errors.password.message}</p>
      )}
      {isSignUp && (
        <>
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword?.message && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
        </>
      )}
      <button type="submit" disabled={!isValid}>
        {buttonText}
      </button>
      {errors.message && (
        <p className="error error-bottom">{errors.message.message}</p>
      )}
    </form>
  );
};

export default AuthForm;
