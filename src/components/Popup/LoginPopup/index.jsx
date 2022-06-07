import React, { useState } from 'react';
import Popup from '..';

import LoginTemplate from './Templates/LoginTemplate';
import SignUpTemplate from './Templates/SignupTemplate';

function LoginPopup({ stateIsShow }) {
    const [typeTemp, setTypeTemp] = useState('login');
    const renderTemplate = (type) => {
        switch (type) {
            case 'signup':
                return <SignUpTemplate onSwitch={setTypeTemp} />;
            case 'login':
                return <LoginTemplate onSwitch={setTypeTemp} />;
            default:
                return <LoginTemplate onSwitch={setTypeTemp} />;
        }
    };
    return <Popup stateIsShow={stateIsShow}>{renderTemplate(typeTemp)}</Popup>;
}

export default LoginPopup;
