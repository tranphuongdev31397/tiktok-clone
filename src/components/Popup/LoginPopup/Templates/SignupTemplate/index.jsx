import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from '../../LoginPopup.module.scss';
import DefaultContent from '~/components/Popup/DefaultContent';
import LoginItem from '../../LoginItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { loginIcon } from '~/assets/images';
import Image from '~/components/Image';
import useToggleShow from '~/hooks/useToggleShow';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import AuthSignUp from '../components/Auth/AuthSignUp';

const cx = classNames.bind(styles);

const SIGNUP_ITEMS = [
    {
        id: 'user',
        props: {
            text: 'Use phone or email',
            icon: <FontAwesomeIcon icon={faUser} />,
        },
        element: LoginItem,
        children: {
            contentTitle: 'Sign up',
            prevStep: true,
            data: [
                {
                    id: 'signup',
                    props: {},
                    element: AuthSignUp,
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
];

function SignUpTemplate({ onSwitch }) {
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
    const [resultData, isShow, setIsShow] = useToggleShow(SIGNUP_ITEMS, false, 3);
    const [history, setHistory] = useState([{ data: resultData }]);

    useEffect(() => {
        if (isShow) {
            setHistory([{ data: resultData }]);
        }
    }, [resultData]);

    const current = history[history.length - 1];
    return (
        <DefaultContent className={cx('login__popup')} title={current.contentTitle || 'Sign up for TikTok'}>
            <div className={cx('login__container')}>
                <div className={cx('login__content')}>
                    {Array.isArray(current.data) &&
                        current.data.map((item) => {
                            const Comp = item.element;

                            return (
                                <Comp
                                    key={item.id}
                                    {...item.props}
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

                    {!isShow && !current.prevStep && (
                        <div className={cx('show__button')} onClick={() => setIsShow(true)}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    )}
                </div>
                <div className={cx('footer__signup')}>
                    By continuing, you agree to TikTok’s{' '}
                    <a
                        className={cx('footer__text')}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tiktok.com/legal/terms-of-use?lang=en"
                    >
                        Terms of Service
                    </a>{' '}
                    and confirm that you have read TikTok’s{' '}
                    <a
                        className={cx('footer__text')}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tiktok.com/legal/privacy-policy?lang=en"
                    >
                        Privacy Policy
                    </a>
                    .
                </div>
                <div className={cx('login__footer')}>
                    <span>Already have an account? </span>
                    <span className={cx('sign__up')} onClick={() => onSwitch('login')}>
                        Login
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

export default SignUpTemplate;
