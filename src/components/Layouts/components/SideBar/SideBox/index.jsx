import React from 'react';
import styles from './SideBox.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBox({ children, title = null, customEmpty = null, border = true, className }) {
    const classes = cx('wrapper', {
        border: border,
        [className]: className,
    });
    return (
        <div className={classes}>
            {title && <h4 className={cx('title')}>{title}</h4>}
            <div className={cx('content', `${customEmpty && 'custom__empty'}`)}>{children || customEmpty}</div>
        </div>
    );
}

export default SideBox;
