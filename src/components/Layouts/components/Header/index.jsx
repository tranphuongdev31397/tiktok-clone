import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '~/components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

//Component
import Button from '~/components/Button';
import TippyWrapper from '~/components/TippyWrapper';
import AccountItem from '~/components/AccountItem';
import Menu from './Menu';

function Header() {
    const cx = classNames.bind(styles);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('header')}>
            <div className={cx('inner', 'container')}>
                <div className={cx('logo')}>
                    <Logo styles={{ width: 118, height: 42 }} />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('tippy-box')} tabIndex="-1" {...attrs}>
                            <TippyWrapper>
                                <div className={cx('account__container')}>
                                    <h4 className={cx('account__title')}>Accounts</h4>
                                    <div className={cx('account__box')}>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </div>
                                </div>
                            </TippyWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={cx('action')}>
                    <Button typeBtn={'text'} Component={Link} to="/upload" target="_blank" size="none">
                        Upload
                    </Button>
                    <Button typeBtn={'primary'} Component="button">
                        Login
                    </Button>

                    <div className={cx('action__menu')}>
                        <Tippy
                            interactive
                            placement={'bottom-end'}
                            render={(attrs) => (
                                <div className={cx('menu__tippyBox')} tabIndex="-1" {...attrs}>
                                    <TippyWrapper className={cx('action__menu-wrapper')}>
                                        <Menu />
                                    </TippyWrapper>
                                </div>
                            )}
                        >
                            <button className={cx('clear-btn', 'icon-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} className={cx('icon-ellipsis')} />
                            </button>
                        </Tippy>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
