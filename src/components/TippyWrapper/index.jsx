import React from 'react';
import styles from './TippyWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function TippyWrapper({ className, children }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return <div className={classes}>{children}</div>;
}

export default TippyWrapper;
