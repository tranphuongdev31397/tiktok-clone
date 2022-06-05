import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import { faHashtag, faHome, faMusic, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import SideBox from './SideBox';
import AccountItem from '~/components/AccountItem';
import AccountDetail from '~/components/AccountDetail';
import useToggleShow from '~/hooks/useToggleShow';
import { currentUser as current, currentUser } from '~/common/constant';

const cx = classNames.bind(styles);
function SideBar() {
    const [activeId, setActiveId] = useState(0);
    const [initSuggestAccounts, setInitSuggestAccounts] = useState([]);

    const [suggestedAccounts, isShow, setIsShow] = useToggleShow(initSuggestAccounts);

    const [initFollowingAccounts, setInitFollowingAccounts] = useState([]);

    const [followingAccounts, isShowFollow, setIsShowFollow] = useToggleShow(initFollowingAccounts);

    useEffect(() => {
        setTimeout(() => {
            setInitSuggestAccounts([1, 2, 3, 4, 5, 6]);
        }, 0);
    }, []);

    const navItems = [
        {
            title: 'For You',
            icon: faHome,
            component: Link,
            props: {
                to: routesConfig.home,
            },
        },
        {
            title: 'Following',
            icon: faUserGroup,
            component: Link,
            props: {
                to: routesConfig.following,
            },
        },
        {
            title: 'Live',
            icon: faVideo,
            component: Link,
            props: {
                to: routesConfig.live,
            },
        },
    ];
    const discoverList = [
        {
            id: 1,
            title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media',
            type: 'music',
        },
        {
            id: 2,
            title: '6ngay6dem',
            type: 'hashtag',
        },
        {
            id: 3,
            title: 'tiktokneeeee',
            type: 'hashtag',
        },
        {
            id: 4,
            title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media',
            type: 'music',
        },
    ];
    const checkTypeDiscover = (type, title) => {
        switch (type) {
            case 'music':
                return { icon: faMusic, to: routesConfig.music(title) };
            case 'hashtag':
                return { icon: faHashtag, to: routesConfig.hashtag(title) };
            default:
                break;
        }
    };
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('navbar')}>
                {navItems.map((item, idx) => {
                    return (
                        <Button
                            key={idx}
                            icon={item.icon}
                            Component={item.component}
                            typeBtn={'text'}
                            classNames={cx('navbar__item', `${activeId === idx && 'active'}`)}
                            onClick={() => setActiveId(idx)}
                            {...item.props}
                        >
                            {item.title}
                        </Button>
                    );
                })}
            </div>
            {!currentUser && (
                <SideBox className={cx('login__area')}>
                    <p>Log in to follow creators, like videos, and view comments.</p>
                    <Button
                        placementText="center"
                        typeBtn="outline"
                        Component="button"
                        size="large"
                        classNames={cx('button__login')}
                    >
                        Log in
                    </Button>
                </SideBox>
            )}
            <SideBox title={'Suggested accounts'} customEmpty="Text empty">
                {suggestedAccounts?.map((acc, idx) => {
                    return (
                        <AccountDetail key={idx}>
                            <AccountItem className={cx('account__item')} />
                        </AccountDetail>
                    );
                })}
                <Button
                    className={cx('toggle__show')}
                    typeBtn="text"
                    Component="div"
                    size="none"
                    onClick={() => setIsShow(!isShow)}
                >
                    See {isShow ? 'less' : 'all'}
                </Button>
            </SideBox>
            {currentUser && (
                <SideBox title={'Following accounts'} customEmpty="Accounts you follow will appear here">
                    {followingAccounts.length > 0 && (
                        <Button
                            className={cx('toggle__show')}
                            typeBtn="text"
                            Component="a"
                            onClick={() => setIsShowFollow(!isShowFollow)}
                        >
                            See {isShow ? 'less' : 'all'}
                        </Button>
                    )}
                </SideBox>
            )}
            <SideBox title={'Discover'} customEmpty="Text empty" className={cx('discover')}>
                {discoverList.length > 0 &&
                    discoverList.map((discover) => {
                        const props = checkTypeDiscover(discover.type, discover.title);
                        return (
                            <Button
                                key={discover.id}
                                classNames={cx('discover__btn')}
                                typeBtn="shadow"
                                Component={Link}
                                rounded
                                size="none"
                                icon={props.icon}
                                to={props.to}
                            >
                                {discover.title}
                            </Button>
                        );
                    })}
            </SideBox>
            <SideBox customEmpty="Text empty">Footer</SideBox>
        </aside>
    );
}

export default SideBar;
