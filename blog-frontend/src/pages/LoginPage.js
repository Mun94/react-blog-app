import React from 'react';
import AuthForm from '../components/auth/AuthForm.js';
import AuthTemplate from '../components/auth/AuthTemplate.js';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm/>
        </AuthTemplate>
    )
};

export default LoginPage;