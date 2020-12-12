import React from 'react';
import RegisterForm from '../containers/RegisterForm.js';
import AuthTemplate from '../components/auth/AuthTemplate.js';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
