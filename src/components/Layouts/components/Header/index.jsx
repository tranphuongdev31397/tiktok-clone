import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '~/components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
function Header() {
    const cx = classNames.bind(styles);
    return (
        <header className={cx('header')}>
            <div className={cx('inner', 'container')}>
                <div className={cx('logo')}>
                    <Logo styles={{ width: 118, height: 42 }} />
                </div>
                <form className={cx('search')}>
                    <input className={cx('search__input')} type="text" placeholder="Search account and videos" />
                    <button className={cx('search__btn', 'clear-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button className={cx('search__action', 'clear-btn')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button type="submit" className={cx('search__action', 'clear-btn')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </form>
                <div className={cx('action')}>
                    <a className="link">Upload</a>
                    <Button padding={'6px 8px'} styleBtn={'primary'}>
                        Login
                    </Button>

                    <div>Action</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
