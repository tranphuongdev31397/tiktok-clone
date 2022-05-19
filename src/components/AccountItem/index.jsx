import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt="accountAvatar"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4cb70bbfa13773f6795ca74bae4defa5.jpeg?x-expires=1653030000&x-signature=w%2FAP%2BvhMqUWu5z%2FmyXE3hoJ2FNk%3D"
            />
            <div className={cx('information')}>
                <h5>
                    <span className={cx('accountId')}>Acccountttt</span>
                    <span>
                        <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                    </span>
                </h5>
                <p className={cx('name')}>name</p>
            </div>
        </div>
    );
}

export default AccountItem;
