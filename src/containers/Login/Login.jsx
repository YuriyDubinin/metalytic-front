import React, {useState} from 'react';

import './style/Login.scss';

import SignInForm from './components/SignInForm/SignInForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import PasswordRecoveryForm from './components/PasswordRecoveryForm/PasswordRecoveryForm';

const Login = () => {
    const [mode, setMode] = useState('SIGN_IN');

    const renderForm = (mode) => {
        return (
            <div className="login__body">
                {mode === 'SIGN_IN' && <SignInForm onChangeMode={(mode) => setMode(mode)} />}
                {mode === 'REGISTRATION' && (
                    <RegistrationForm onChangeMode={(mode) => setMode(mode)} />
                )}
                {mode === 'PASSWORD_RECOVERY' && (
                    <PasswordRecoveryForm onChangeMode={(mode) => setMode(mode)} />
                )}
            </div>
        );
    };

    return <div className="login">{renderForm(mode)}</div>;
};

export default Login;
