import React from 'react';
import AuthForm from '../components/auth/AuthForm.js';
import AuthTemplate from '../components/auth/AuthTemplate.js';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm/>
        </AuthTemplate>
    )
};

export default RegisterPage;