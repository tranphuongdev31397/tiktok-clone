import React from 'react';

import classNames from 'classnames/bind';
import styles from './MenuList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faKeyboard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function MenuList({ setStep }) {
    const menuList = [
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
                to: '/feedback',
            },
        },
        {
            title: 'Keyboard and shortcuts',
            icon: faKeyboard,
            component: 'a',
            props: {},
        },
    ];
    return (
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
        </div>
    );
}

export default MenuList;
