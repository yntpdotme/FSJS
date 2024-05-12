import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

import {LocalStorage} from '@services';
import {HomePage, SignInPage, SignUpPage, TodosPage} from '@pages';

import './App.css';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (['/', '/signin', '/signup'].includes(location.pathname)) return;
    if (!LocalStorage.get('accessToken')) navigate('/');
  }, [navigate, location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </>
  );
};

export default App;
