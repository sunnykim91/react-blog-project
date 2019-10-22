import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const Registerpage = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    ); 
};

export default Registerpage;
