import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} alt="accountAvatar" src="https://i.pravatar.cc/300" />

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
