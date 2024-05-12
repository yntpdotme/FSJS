import {Link, useNavigate} from 'react-router-dom';

import {AuthService, LocalStorage} from '@services';
import {AuthForm, GuestLogin} from '@components';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async formData => {
    const response = await AuthService.signUp(formData);
    const {accessToken} = response?.data?.data || {};

    LocalStorage.set('accessToken', accessToken);

    navigate('/todos');
  };

  return (
    <div>
      <p className="signup">Create an account</p>
      <div className="authform">
        <AuthForm
          onSubmit={handleSignUp}
          buttonText="Create my account"
          isSignUp
        />
      </div>
      <p className="footer">
        Have an account? <Link to="/signin">Sign In</Link>
      </p>
      <GuestLogin label={'Try as a Guest'} />
    </div>
  );
};

export default SignUpPage;
