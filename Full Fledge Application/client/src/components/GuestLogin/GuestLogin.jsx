import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

import {AuthService, LocalStorage} from '@services';
import {ErrorSnackbar} from '@components';
import './GuestLogin.css';

const GuestLogin = ({label}) => {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();

  const handleGuestSignIn = async () => {
    try {
      const formData = {
        email: 'guest@email.com',
        password: 'Guest@1',
      };

      const response = await AuthService.signIn(formData);
      const {accessToken, refreshToken} = response?.data?.data || {};

      LocalStorage.set('accessToken', accessToken);
      LocalStorage.set('refreshToken', refreshToken);

      navigate('/todos');
    } catch (error) {
      setVisibility(true);
      let errorMessage = 'An unexpected error occurred.';

      if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      console.log(errorMessage);
    } finally {
      setTimeout(() => setVisibility(false), 2000);
    }
  };
  return (
    <>
      <button onClick={handleGuestSignIn} className="guest">
        <span>{label || 'Sign In as Guest'}</span>
      </button>
      {visibility && (
        <ErrorSnackbar label="Sorry, guest sign-in is currently unavailable. Please try later." />
      )}
    </>
  );
};

export default GuestLogin;
