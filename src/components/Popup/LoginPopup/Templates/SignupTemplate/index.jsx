import React from 'react';

import classNames from 'classnames/bind';
import styles from '../../LoginPopup.module.scss';
import DefaultContent from '~/components/Popup/DefaultContent';
import LoginItem from '../../LoginItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SignUpTemplate({ onSwitch }) {
    return (
        <DefaultContent className={cx('login__popup')} title={'Login to TikTok'}>
            <div className={cx('login__container')}>
                <div className={cx('login__content')}>
                    <LoginItem icon={<FontAwesomeIcon icon={faQrcode} />} text={'Qr Code'} />

                    <LoginItem icon={<FontAwesomeIcon icon={faQrcode} />} text={'Qr Code'} />
                </div>
                <div className={cx('login__footer')}>
                    <span>Already have an account? </span>
                    <span className={cx('sign__up')} onClick={() => onSwitch('login')}>
                        Login
                    </span>
                </div>
            </div>
        </DefaultContent>
    );
}

export default SignUpTemplate;
