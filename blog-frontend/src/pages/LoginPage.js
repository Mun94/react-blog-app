import React from 'react';
import LoginForm from '../containers/LoginForm.js';
import AuthTemplate from '../components/auth/AuthTemplate.js';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
