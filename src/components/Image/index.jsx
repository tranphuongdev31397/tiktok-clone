import React, { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import { images } from '~/assets/images';

const cx = classNames.bind(styles);

function Image({ className, src, alt, fallback = images.errorImage, ...props }, ref) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const [fallbackImg, setFallBackImg] = useState();
    const handleSetFallback = () => {
        setFallBackImg(fallback);
    };
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img className={classes} src={fallbackImg || src} alt={alt} ref={ref} {...props} onError={handleSetFallback} />
    );
}

export default forwardRef(Image);
