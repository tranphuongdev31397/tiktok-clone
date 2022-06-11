import React, { useEffect, useState } from 'react';
import Popup from '..';

import LoginTemplate from './Templates/LoginTemplate';
import SignUpTemplate from './Templates/SignupTemplate';

function LoginPopup({ stateIsShow }) {
    const [iShowLogin, setIsShowLogin] = stateIsShow;
    const [typeTemp, setTypeTemp] = useState('login');

    useEffect(() => {
        if (!iShowLogin) {
            setTypeTemp('login');
        }
    }, [iShowLogin]);

    const renderTemplate = (type) => {
        switch (type) {
            case 'signup':
                return <SignUpTemplate onSwitch={setTypeTemp} />;
            case 'login':
                return <LoginTemplate onSwitch={setTypeTemp} />;
            default:
                throw new Error('This type is not match');
        }
    };
    return <Popup stateIsShow={[iShowLogin, setIsShowLogin]}>{renderTemplate(typeTemp)}</Popup>;
}

export default LoginPopup;
