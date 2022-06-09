import { faAngleLeft, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import DefaultContent from '~/components/Popup/DefaultContent';
import LoginItem from '../../LoginItem';

import classNames from 'classnames/bind';
import styles from '../../LoginPopup.module.scss';
import QrCode from './QrCode';

const cx = classNames.bind(styles);

function LoginTemplate({ onSwitch }) {
    const LOGIN_ITEMS = [
        {
            id: 'qrCode',
            props: {
                text: 'Use QR Code',
                icon: <FontAwesomeIcon icon={faQrcode} />,
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
    ];
    const [history, setHistory] = useState([{ data: LOGIN_ITEMS }]);
    const current = history[history.length - 1];
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
