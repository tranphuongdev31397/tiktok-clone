import React, { forwardRef } from 'react';

import classNames from 'classnames/bind';
import styles from './IconButton.module.scss';
import { formatNumber } from '~/common/function';
const cx = classNames.bind(styles);

function IconButton({ icon, number, animation, className, classIconBox, ...props }, ref) {
    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
            {...props}
            ref={ref}
        >
            <div
                className={cx('icon__box', {
                    [classIconBox]: classIconBox,
                })}
            >
                <div
                    className={cx('icon', {
                        [animation]: animation,
                    })}
                >
                    {icon}
                </div>
            </div>
            <div className={cx('number')}>{formatNumber(number)}</div>
        </div>
    );
}

export default forwardRef(IconButton);
