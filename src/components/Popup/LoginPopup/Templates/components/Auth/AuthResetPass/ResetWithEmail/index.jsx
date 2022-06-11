import React, { useEffect, useState } from 'react';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from '../../Auth.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function ResetWithEmail({ textButton }) {
    const [isSend, setIsSend] = useState(false);

    const [isShowPass, setIsShowPass] = useState(false);

    const [showValid, setShowValid] = useState(false);

    useEffect(() => {
        return () => {
            setShowValid(false);
        };
    }, []);
    return (
        <>
            <div className={cx('input__box')}>
                <input className={cx('reset-input', 'input__item')} placeholder="Email address" name="email" />
            </div>
            <div className={cx('input__box')}>
                <input className={cx('reset-input', 'input__item')} placeholder="Enter 6 digit-code" name="OTPCode" />
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
            <div className={cx('input__box')}>
                <input
                    type={isShowPass ? 'text' : 'password'}
                    className={cx('reset-input', 'input__item')}
                    placeholder="Enter new Password"
                    onBlur={() => setShowValid(true)}
                    name="password"
                />
                <div className={cx('icon-eye')} onClick={() => setIsShowPass(!isShowPass)}>
                    <FontAwesomeIcon icon={isShowPass ? faEye : faEyeSlash} />
                </div>
            </div>
            {showValid ? (
                <div className={cx('valid__new-pass')}>
                    <h5>Your password must have:</h5>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        8 to 20 characters
                    </p>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        Letters, numbers, and special characters
                    </p>
                </div>
            ) : (
                <></>
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

export default ResetWithEmail;
