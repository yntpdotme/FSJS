import {clientPublic as apiClient} from './apiClient';

const AuthService = {
  signUp: formData => apiClient.post('/auth/signup', formData),

  signIn: formData => apiClient.post('/auth/signin', formData),
};

export default AuthService;
