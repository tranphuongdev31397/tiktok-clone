import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './Button.module.scss';
function Button({ children, styleBtn = 'default', padding }) {
    const stylesBtn = ['default', 'primary'];
    if (!stylesBtn.includes(styleBtn)) {
        styleBtn = 'default';
    }
    const cx = classNames.bind(styles);
    return (
        <button className={cx(styleBtn, 'clear-btn', 'btn-style')} style={{ padding: padding }}>
            {children}
        </button>
    );
}

export default Button;
