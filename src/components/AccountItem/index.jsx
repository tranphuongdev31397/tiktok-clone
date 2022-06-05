import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import { fakeUser } from '~/common/data';

const cx = classNames.bind(styles);
function AccountItem({ user = fakeUser, className }, ref) {
    return (
        <Link to={routesConfig.userDetail(user.nickname)} className={cx('wrapper', [className])} ref={ref}>
            <Image className={cx('avatar')} alt="accountAvatar" src={user.avatar} />

            <div className={cx('information')}>
                <h5>
                    <span className={cx('accountId')}>
                        {user.first_name} {user.last_name}
                    </span>
                    {user.tick && (
                        <span>
                            <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                        </span>
                    )}
                </h5>
                <p className={cx('name')}>{user.nickname}</p>
            </div>
        </Link>
    );
}

export default forwardRef(AccountItem);
