import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    Component = 'button',
    typeBtn = 'primary',
    size = 'medium',
    classNames,
    disable = false,
    rounded = false,
    children,
    ...props
}) {
    const globalProps = {
        ...props,
    };
    //Button Element

    const ElmButtons = ['a', 'button', Link];

    if (!ElmButtons.includes(Component)) {
        Component = 'button';
    }

    //Style Button
    const typesBtn = ['primary', 'outline', 'text', 'shadow'];

    if (!typesBtn.includes(typeBtn)) {
        typeBtn = 'primary';
    }

    //Size button
    const sizes = ['medium', 'large', 'small'];
    if (!sizes.includes(size)) {
        size = 'primary';
    }
    //Check disable and remove event listener
    if (disable) {
        Object.keys(globalProps).forEach((key) => {
            if (key.startsWith('on') && typeof globalProps[key] === 'function') {
                delete globalProps[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [typeBtn]: typeBtn,
        [size]: size,
        [classNames]: classNames,
        rounded,
        disable,
    });
    return (
        <Component className={classes} {...globalProps}>
            <div>{children}</div>
        </Component>
    );
}

export default Button;
