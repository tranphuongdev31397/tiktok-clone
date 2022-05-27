import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '~/components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

//Component
import Button from '~/components/Button';
import Menu from './Menu';
import Search from '../Search';
import Image from '~/components/Image';

function Header() {
    const cx = classNames.bind(styles);
    const currentUser = true;
    return (
        <header className={cx('header')}>
            <div className={cx('inner', 'container')}>
                <div className={cx('logo')}>
                    <Link to="/" className="flex-center">
                        <Logo styles={{ width: 118, height: 42 }} />
                    </Link>
                </div>

                <Search />

                <div className={cx('action')}>
                    <Button typeBtn={'text'} Component={Link} to="/upload" size="none">
                        Upload
                    </Button>

                    {!currentUser && (
                        <Button typeBtn={'primary'} Component="button">
                            Login
                        </Button>
                    )}

                    <div className={cx('action__menu')}>
                        <Menu>
                            <button className={cx('clear-btn', 'icon-button')}>
                                {currentUser ? (
                                    <div>
                                        <Image
                                            alt="avatar"
                                            className={cx('currentAvatar')}
                                            src="https://i.pravatar.cc/300"
                                        />
                                    </div>
                                ) : (
                                    <FontAwesomeIcon icon={faEllipsisVertical} className={cx('icon-ellipsis')} />
                                )}
                            </button>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
