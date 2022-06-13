import React, { useState } from 'react';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../Auth.module.scss';
import SelectBox from '~/components/SelectBox';

const cx = classNames.bind(styles);
function LoginWithPhone({ onGoNextStep = null, textButton, isSignUp = false }) {
    const [isSend, setIsSend] = useState(false);
    const [loginWithCode, setLoginWithCode] = useState(true);
    const [isShowPass, setIsShowPass] = useState(false);

    const handleChangeTypeLogin = () => {
        setLoginWithCode(!loginWithCode);
    };
    return (
        <>
            <div className={cx('input__box')}>
                <div className={cx('input__select')}>
                    <SelectBox className={cx('input__item')} />
                </div>
                <input className={cx('reset-input', 'input__item')} placeholder="Phone number" name="phoneNumber" />
            </div>
            {loginWithCode ? (
                <div className={cx('input__box')}>
                    <input
                        className={cx('reset-input', 'input__item')}
                        placeholder="Enter 6 digit-code"
                        name="OTPCode"
                    />
                    <Button
                        classNames={cx('btn__send')}
                        Component="button"
                        typeBtn="shadow"
                        placementText="center"
                        disable={!isSend}
                    >
                        Send Code
                    </Button>
                </div>
            ) : (
                <div className={cx('input__box')}>
                    <input
                        type={isShowPass ? 'text' : 'password'}
                        className={cx('reset-input', 'input__item')}
                        placeholder="Password"
                        name="password"
                    />
                    <div className={cx('icon-eye')} onClick={() => setIsShowPass(!isShowPass)}>
                        <FontAwesomeIcon icon={isShowPass ? faEye : faEyeSlash} />
                    </div>
                </div>
            )}
            {isSignUp ? (
                <></>
            ) : loginWithCode ? (
                <span className={cx('link', 'text__default', 'optional')} onClick={handleChangeTypeLogin}>
                    Login with Password
                </span>
            ) : (
                <>
                    <span className={cx('link', 'text__default', 'optional')} onClick={onGoNextStep}>
                        Forgot Password?
                    </span>
                    <span className={cx('link', 'text__default', 'optional')} onClick={handleChangeTypeLogin}>
                        Login with Code
                    </span>
                </>
            )}

            <Button
                classNames={cx('button__submit')}
                size="large"
                Component="button"
                typeBtn="shadow"
                placementText="center"
                disable
            >
                {textButton}
            </Button>
        </>
    );
}

export default LoginWithPhone;
