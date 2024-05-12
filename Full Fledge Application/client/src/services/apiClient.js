import axios from 'axios';
import {LocalStorage} from './index';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const createClient = withCredentials => {
  const client = axios.create({
    baseURL,
    withCredentials,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Only add interceptors if the client requires authentication
  if (withCredentials) {
    client.interceptors.request.use(
      async config => {
        config.headers.Authorization = `Bearer ${LocalStorage.get(
          'accessToken'
        )}`;
        return config;
      },
      error => Promise.reject(error)
    );
  }

  return client;
};

const clientPublic = createClient(false); // No credentials
const clientPrivate = createClient(true); // With credentials

export {clientPublic, clientPrivate};
