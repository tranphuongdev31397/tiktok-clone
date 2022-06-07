import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DefaultContent from '~/components/Popup/DefaultContent';
import LoginItem from '../../LoginItem';

import classNames from 'classnames/bind';
import styles from '../../LoginPopup.module.scss';

const cx = classNames.bind(styles);

function LoginTemplate({ onSwitch }) {
    return (
        <DefaultContent className={cx('login__popup')} title={'Login to TikTok'}>
            <div className={cx('login__container')}>
                <div className={cx('login__content')}>
                    <LoginItem icon={<FontAwesomeIcon icon={faQrcode} />} text={'Qr Code'} />
                </div>
                <div className={cx('login__footer')}>
                    <span>Don’t have an account? </span>
                    <span className={cx('sign__up')} onClick={() => onSwitch('signup')}>
                        Sign up
                    </span>
                </div>
            </div>
        </DefaultContent>
    );
}

export default LoginTemplate;
