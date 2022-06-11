import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import DefaultContent from '~/components/Popup/DefaultContent';
import LoginItem from '../../LoginItem';

import classNames from 'classnames/bind';
import styles from '../../LoginPopup.module.scss';
import QrCode from './QrCode';
import { PopupContext } from '~/components/Popup';
import { loginIcon } from '~/assets/images';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Image from '~/components/Image';
import AuthResetPass from '../components/Auth/AuthResetPass';
import AuthLogin from '../components/Auth/AuthLogin';

const cx = classNames.bind(styles);

function LoginTemplate({ onSwitch }) {
    const goNextStep = (data) => {
        setHistory((prev) => [...prev, data]);
    };
    const goBackStep = () => {
        setHistory((prev) => {
            const prevData = [...prev];
            prevData.pop();
            return prevData;
        });
    };

    const LOGIN_ITEMS = [
        {
            id: 'qrCode',
            props: {
                text: 'Use QR Code',
                icon: loginIcon.qrCode,
            },
            element: LoginItem,
            children: {
                contentTitle: 'Login with QR Code',
                prevStep: true,
                data: [
                    {
                        element: QrCode,
                        id: 'loginQrCode',
                        props: {},
                    },
                ],
            },
        },
        {
            id: 'user',
            props: {
                text: 'Use phone / email / username',
                icon: <FontAwesomeIcon icon={faUser} />,
            },
            element: LoginItem,
            children: {
                contentTitle: 'Login',
                prevStep: true,
                data: [
                    {
                        element: AuthLogin,
                        id: 'loginAuth',
                        props: {},
                        children: {
                            contentTitle: 'Reset Password',
                            prevStep: true,
                            data: [
                                {
                                    element: AuthResetPass,
                                    id: 'resetAuth',
                                    props: {
                                        onGoBackStep: goBackStep,
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            id: 'facebook',
            props: {
                text: 'Continue with Facebook',
                icon: <Image className={cx('icon__login')} src={loginIcon.facebook} />,
            },
            element: LoginItem,
        },
        {
            id: 'google',
            props: {
                text: 'Continue with Google',
                icon: <Image className={cx('icon__login')} src={loginIcon.google} />,
            },
            element: LoginItem,
        },
        {
            id: 'twitter',
            props: {
                text: 'Continue with Twitter',
                icon: <Image className={cx('icon__login')} src={loginIcon.twitter} />,
            },
            element: LoginItem,
        },
        {
            id: 'line',
            props: {
                text: 'Continue with LINE',
                icon: <Image className={cx('icon__login')} src={loginIcon.line} />,
            },
            element: LoginItem,
        },
        {
            id: 'kakaotalk',
            props: {
                text: 'Continue with KakaoTalk',
                icon: loginIcon.kakaotalk,
            },
            element: LoginItem,
        },
        {
            id: 'apple',
            props: {
                text: 'Continue with Apple',
                icon: loginIcon.apple,
            },
            element: LoginItem,
        },
        {
            id: 'instagram',
            props: {
                text: 'Continue with Instagram',
                icon: <Image className={cx('icon__login')} src={loginIcon.instagram} />,
            },
            element: LoginItem,
        },
    ];
    const [history, setHistory] = useState([{ data: LOGIN_ITEMS }]);
    const current = history[history.length - 1];
    const value = useContext(PopupContext);
    const [isShow] = value.stateIsShow;

    useEffect(() => {
        if (!isShow) {
            setHistory([{ data: LOGIN_ITEMS }]);
        }
    }, [isShow]);

    return (
        <DefaultContent className={cx('login__popup')} title={current.contentTitle || 'Login to TikTok'}>
            <div className={cx('login__container')}>
                <div className={cx('login__content')}>
                    {Array.isArray(current.data) &&
                        current.data.map((item) => {
                            const Comp = item.element;
                            const props = { ...item.props };
                            return (
                                <Comp
                                    key={item.id}
                                    {...props}
                                    onClick={() => {
                                        if (item.children) {
                                            goNextStep(item.children);
                                        } else {
                                            console.log(item);
                                        }
                                    }}
                                />
                            );
                        })}
                </div>
                <div className={cx('login__footer')}>
                    <span>Don’t have an account? </span>
                    <span className={cx('sign__up')} onClick={() => onSwitch('signup')}>
                        Sign up
                    </span>
                </div>
            </div>
            {current.prevStep && (
                <div className={cx('back')} onClick={() => goBackStep()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            )}
        </DefaultContent>
    );
}

export default LoginTemplate;
