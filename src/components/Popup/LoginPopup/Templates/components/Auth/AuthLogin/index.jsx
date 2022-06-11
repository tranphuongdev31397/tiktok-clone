import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Auth.module.scss';
import LoginWithPhone from './LoginPhone';
import LoginEmailOrUser from './LoginEmailOrUser';

const cx = classNames.bind(styles);
function AuthLogin({ onClick: onGoNextStep, ...props }) {
    const [withPhone, setWithPhone] = useState(true);
    return (
        <div className={cx('wrapper')} {...props}>
            <div className={cx('title')}>
                <h4 className="text__default f600">{withPhone ? 'Phone' : 'Email or Username'}</h4>
                <span
                    className={cx('link', 'text__default')}
                    onClick={() => {
                        setWithPhone(!withPhone);
                    }}
                >
                    {withPhone ? 'Log in with email or username' : 'Log in with phone'}
                </span>
            </div>
            <form>
                {withPhone ? (
                    <LoginWithPhone onGoNextStep={onGoNextStep} textButton="Login" />
                ) : (
                    <LoginEmailOrUser onGoNextStep={onGoNextStep} textButton="Login" />
                )}
            </form>
        </div>
    );
}

export default AuthLogin;
