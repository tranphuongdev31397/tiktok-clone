import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

import TippyWrapper from '~/components/TippyWrapper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userAPI } from '~/apis/userAPI';
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const [isFocus, setIsFocus] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    let latestValue = useDebounce(searchValue);

    //Call API functions
    const fetchSearchUser = async (searchString) => {
        const response = await userAPI.searchUser(searchString);
        setLoading(false);
        setSearchResult(response.data);
    };
    //End Call API function
    useEffect(() => {
        if (!latestValue.trim()) {
            setSearchResult([]);
            return;
        }

        try {
            setLoading(true);

            fetchSearchUser(latestValue);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }, [latestValue]);
    //Function local component
    const handleOnChange = (e) => {
        const valueChange = e.target.value;
        if (valueChange.startsWith(' ')) return;

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
                                {searchResult.map((result) => {
                                    return <AccountItem key={result.id} user={result} />;
                                })}
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
                {!!searchValue && !loading && (
                    <button className={cx('search__action', 'clear-btn')} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
                {loading && (
                    <button className={cx('search__action', 'clear-btn', 'spinner')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
            </div>
        </Tippy>
    );
}

export default Search;
