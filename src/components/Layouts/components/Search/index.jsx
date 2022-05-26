import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

import TippyWrapper from '~/components/TippyWrapper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const [isFocus, setIsFocus] = useState(true);
    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleOnChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleClearSearch = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    return (
        <Tippy
            interactive
            visible={isFocus && searchResult.length > 0}
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
            onClickOutside={() => setIsFocus(false)}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    className={cx('search__input')}
                    type="text"
                    placeholder="Search account and videos"
                    ref={inputRef}
                    onChange={handleOnChange}
                    onFocus={() => setIsFocus(true)}
                />
                <button className={cx('search__btn', 'clear-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                {!!searchValue && (
                    <button className={cx('search__action', 'clear-btn')} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
                {/* <button className={cx('search__action', 'clear-btn')}>
                    <FontAwesomeIcon icon={faSpinner} />
                </button> */}
            </div>
        </Tippy>
    );
}

export default Search;
