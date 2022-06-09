import React from 'react';

import classNames from 'classnames/bind';
import styles from './DefaultContent.module.scss';

const cx = classNames.bind(styles);

function DefaultContent({ className, title, children }) {
    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
        >
            <p className={cx('title', 'text-default')}>{title}</p>
            {children}
        </div>
    );
}

export default DefaultContent;
