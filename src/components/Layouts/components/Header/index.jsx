import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
function Header() {
    const cx = classNames.bind(styles);
    return (
        <header className={cx('header')}>
            <div className={cx('inner', 'container', 'active')}>Header nè</div>
        </header>
    );
}

export default Header;
