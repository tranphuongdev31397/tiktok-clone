import React, { useRef, useState } from 'react';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../Auth.module.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const defaultCheck = false;
function LoginEmailOrUser({ onGoNextStep = null, textButton, isSignUp = false }) {
    const [isShowPass, setIsShowPass] = useState(false);
    const [isCheck, setIsCheck] = useState(defaultCheck);
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
            {isSignUp ? (
                <>
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
                            disable
                        >
                            Send Code
                        </Button>
                    </div>
                    <div className={cx('checked__area')}>
                        <div className={cx('input__check')}>
                            <input
                                defaultChecked={defaultCheck}
                                type={'checkbox'}
                                onChange={(e) => {
                                    setIsCheck(e.target.checked);
                                }}
                            />
                            <div className={cx('custom__checked', isCheck ? 'checked' : '')}>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        </div>
                        <span className={cx('text__small')}>
                            Get trending content, newsletters, promotions, recommendations, and account updates sent to
                            your email
                        </span>
                    </div>
                </>
            ) : (
                <span className={cx('link', 'text__default', 'optional')} onClick={onGoNextStep}>
                    Forgot Password?
                </span>
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

export default LoginEmailOrUser;
