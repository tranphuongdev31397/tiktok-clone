import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from '../Auth.module.scss';
import SignUpWithEmail from '../AuthLogin/LoginEmailOrUser';
import SignUpWithPhone from '../AuthLogin/LoginPhone';
import SelectBox from '~/components/SelectBox';

const cx = classNames.bind(styles);
function AuthSignUp() {
    const [withPhone, setWithPhone] = useState(true);
    const daysList = Array.from({ length: 31 }, (_, i) => i + 1);
    const yearsList = Array.from({ length: new Date().getFullYear() - 1900 }, (_, i) => i + 1900);
    const monthsList = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className={cx('wrapper', 'signup')}>
            <h4 className="text__default f600">When's your birthday?</h4>
            <div className={cx('input__container')}>
                <div className={cx('input__box', 'signup__select')}>
                    <SelectBox
                        className={cx('input__item')}
                        name="month"
                        placeholder="Month"
                        widthBox={cx('custom__select')}
                        listSelect={monthsList.map((item) => {
                            return {
                                id: item,
                                text: item,
                                value: item,
                            };
                        })}
                    />
                </div>
                <div className={cx('input__box', 'signup__select')}>
                    <SelectBox
                        className={cx('input__item')}
                        name="days"
                        placeholder="Day"
                        widthBox={cx('custom__select')}
                        listSelect={daysList.map((item) => {
                            return {
                                id: item,
                                text: item,
                                value: item,
                            };
                        })}
                    />
                </div>
                <div className={cx('input__box', 'signup__select')}>
                    <SelectBox
                        className={cx('input__item')}
                        name="year"
                        placeholder="Year"
                        widthBox={cx('custom__select')}
                        listSelect={yearsList.reverse().map((item) => {
                            return {
                                id: item,
                                text: item,
                                value: item,
                            };
                        })}
                    />
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

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e.target.value);
                }}
            >
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
