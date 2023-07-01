import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import './style/Login.scss';

import SignInForm from './components/SignInForm/SignInForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import PasswordRecoveryForm from './components/PasswordRecoveryForm/PasswordRecoveryForm';
import LogoutForm from './components/LogoutForm/LogoutForm';

import {selectIsAuth} from '../../slices/mainSlice';

const Login = ({onCloseModal}) => {
    const isAuth = useSelector(selectIsAuth);

    const [mode, setMode] = useState(isAuth ? 'LOGOUT' : 'SIGN_IN');

    const renderForm = (mode) => {
        return (
            <div className="login__body">
                {!isAuth && mode === 'SIGN_IN' && (
                    <SignInForm
                        onChangeMode={(mode) => setMode(mode)}
                        onCloseModal={onCloseModal}
                    />
                )}
                {!isAuth && mode === 'REGISTRATION' && (
                    <RegistrationForm
                        onChangeMode={(mode) => setMode(mode)}
                        onCloseModal={onCloseModal}
                    />
                )}
                {!isAuth && mode === 'PASSWORD_RECOVERY' && (
                    <PasswordRecoveryForm
                        onChangeMode={(mode) => setMode(mode)}
                        onCloseModal={onCloseModal}
                    />
                )}
                {mode === 'LOGOUT' && <LogoutForm onCloseModal={onCloseModal} />}
            </div>
        );
    };

    return <div className="login">{renderForm(mode)}</div>;
};

export default Login;
