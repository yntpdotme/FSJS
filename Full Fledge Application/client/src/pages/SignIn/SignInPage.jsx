import {Link, useNavigate} from 'react-router-dom';

import {AuthService, LocalStorage} from '@services';
import {AuthForm, GuestLogin} from '@components';

import './SignInPage.css';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = async formData => {
    const response = await AuthService.signIn(formData);
    const {accessToken} = response?.data?.data || {};

    LocalStorage.set('accessToken', accessToken);

    navigate('/todos');
  };

  return (
    <div>
      <p className="signin">Sign In</p>
      <div className="authform">
        <AuthForm onSubmit={handleSignIn} buttonText="Sign in" />
      </div>
      <p className="footer">
        No Account? <Link to="/signup">Sign Up</Link>
      </p>
      <GuestLogin />
    </div>
  );
};

export default SignInPage;
