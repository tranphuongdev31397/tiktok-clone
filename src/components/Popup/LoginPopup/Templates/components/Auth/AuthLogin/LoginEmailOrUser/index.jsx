import React, { useState } from 'react';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../Auth.module.scss';

const cx = classNames.bind(styles);
function LoginEmailOrUser({ onGoNextStep = null, textButton }) {
    const [isShowPass, setIsShowPass] = useState(false);

    return (
        <>
            <div className={cx('input__box')}>
                <input className={cx('reset-input', 'input__item')} placeholder="Email or Username" name="userName" />
            </div>

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

            <span className={cx('link', 'text__default', 'optional')} onClick={onGoNextStep}>
                Forgot Password?
            </span>

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

export default LoginEmailOrUser;
