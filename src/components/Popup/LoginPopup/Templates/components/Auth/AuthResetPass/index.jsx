import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from '../Auth.module.scss';
import ResetWithPhone from './ResetWithPhone';
import ResetWithEmail from './ResetWithEmail';

const cx = classNames.bind(styles);
function AuthResetPass({ ...props }) {
    const [withPhone, setWithPhone] = useState(true);

    return (
        <div className={cx('wrapper')} {...props}>
            <div className={cx('title')}>
                <h4 className="text__default f600">{withPhone ? 'Enter phone number' : 'Enter email Address'}</h4>
                <span
                    className={cx('link', 'text__default')}
                    onClick={() => {
                        setWithPhone(!withPhone);
                    }}
                >
                    {withPhone ? 'Reset with email' : 'Reset with phone number'}
                </span>
            </div>
            <form>{withPhone ? <ResetWithPhone textButton="Login" /> : <ResetWithEmail textButton="Login" />}</form>
        </div>
    );
}

export default AuthResetPass;
