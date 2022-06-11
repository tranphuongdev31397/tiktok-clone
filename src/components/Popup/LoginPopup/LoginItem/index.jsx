import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoginItem.module.scss';
const cx = classNames.bind(styles);

function LoginItem({ icon, text, ...props }) {
    return (
        <div className={cx('login__item')} {...props}>
            <span className={cx('icon__box', 'flex-center')}>
                <div className={cx('icon', 'flex-center')}>{icon}</div>
            </span>
            <span className={cx('text', 'flex-center')}>{text}</span>
        </div>
    );
}

export default LoginItem;
