import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from '../Auth.module.scss';
import SignUpWithEmail from '../AuthLogin/LoginEmailOrUser';
import SignUpWithPhone from '../AuthLogin/LoginPhone';

const cx = classNames.bind(styles);
function AuthSignUp() {
    const [withPhone, setWithPhone] = useState(true);

    return (
        <div className={cx('wrapper', 'signup')}>
            <h4 className="text__default f600">When's your birthday?</h4>
            <div className={cx('input__container')}>
                <div className={cx('input__box', 'signup__select')}>
                    <select className={cx('input__item')}></select>
                </div>
                <div className={cx('input__box', 'signup__select')}>
                    <select className={cx('input__item')}></select>
                </div>
                <div className={cx('input__box', 'signup__select')}>
                    <select className={cx('input__item')}></select>
                </div>
            </div>
            <p className={cx('text__small')}>Your birthday won't be shown publicly.</p>

            <div className={cx('title')}>
                <h4 className={cx('text__default f600')}>{withPhone ? 'Phone' : 'Email'}</h4>
                <span className={cx('link', 'text__default')} onClick={() => setWithPhone(!withPhone)}>
                    {withPhone ? 'Sign up with email' : 'Sign up with phone'}
                </span>
            </div>
            {/*  LoginWithEmailAndUser is rename to  component SignUpWithEmail */}
            {/*  LoginWithPhone is rename  to component SignUpWithPhone */}

            <form>
                {!withPhone ? (
                    <SignUpWithEmail textButton={'Next'} isSignUp={true} />
                ) : (
                    <SignUpWithPhone textButton={'Next'} isSignUp={true} />
                )}
            </form>
        </div>
    );
}

export default AuthSignUp;
