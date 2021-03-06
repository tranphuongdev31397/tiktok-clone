import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './MenuList.module.scss';
import {
    faArrowRightFromBracket,
    faEarthAsia,
    faGear,
    faKeyboard,
    faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import routesConfig from '~/config/routes';
import { currentUser } from '~/common/constant';

const cx = classNames.bind(styles);
function MenuList({ setStep, setIsShow }) {
    const defaultMenuList = [
        {
            title: 'English',
            icon: faEarthAsia,
            component: 'a',
            props: {
                onClick: () => setStep({ step: 2, type: 'leagues' }),
            },
        },
        {
            title: 'Feedback and help',
            icon: faQuestionCircle,
            component: Link,
            props: {
                to: routesConfig.feedback,
            },
        },
        {
            title: 'Keyboard and shortcuts',
            icon: faKeyboard,
            component: 'a',
            props: {
                onClick: () => setIsShow(true),
            },
        },
    ];
    const userMenuList = [
        {
            title: 'View Profile',
            icon: faUser,
            component: Link,
            props: {
                to: routesConfig.profile,
            },
        },
        {
            title: 'Get Coins',
            icon: faTiktok,
            component: Link,
            props: {
                to: routesConfig.coin,
            },
        },
        {
            title: 'Settings',
            icon: faGear,
            component: Link,
            props: {
                to: routesConfig.setting,
            },
        },
    ];
    let menuList = defaultMenuList;

    if (currentUser) {
        menuList = [...userMenuList, ...defaultMenuList];
    }

    return (
        <>
            <div className={cx('wrapper', 'menu__list')}>
                {menuList.map((item, idx) => {
                    return (
                        <Button
                            key={idx}
                            typeBtn={'text'}
                            Component={item.component}
                            classNames={cx('menu__item')}
                            {...item.props}
                            icon={item.icon}
                        >
                            {item.title}
                        </Button>
                    );
                })}
                {currentUser && (
                    <Button
                        typeBtn="text"
                        Component="a"
                        classNames={cx('menu__item', 'item__logout')}
                        icon={faArrowRightFromBracket}
                    >
                        Log out
                    </Button>
                )}
            </div>
        </>
    );
}

export default MenuList;
