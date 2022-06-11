import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './QrCode.module.scss';
import Image from '~/components/Image';
import { loginIcon } from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function QrCode({ ...props }) {
    const [isGuide, setIsGuide] = useState(false);
    return (
        <div className={cx('wrapper')} {...props}>
            {isGuide ? (
                <div className={cx('container')}>
                    <Image
                        className={cx('image__guide')}
                        src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp_login/imgs/mobile-tip.68ce27b2.png"
                    />
                </div>
            ) : (
                <div className={cx('container')}>
                    <div className={cx('image')}>
                        <Image src={'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example'} />
                    </div>
                    <div className={cx('text__box')}>
                        <p>
                            1. Open the TikTok app on your mobile device and tap <b>Discover</b>
                        </p>
                        <p>
                            2. Tap <span className={cx('icon-scan')}>{loginIcon.scan}</span> and scan QR code
                        </p>
                        <p>3. Confirm your login on your mobile device</p>
                    </div>
                </div>
            )}

            <div className={cx('guide')} onMouseEnter={() => setIsGuide(true)} onMouseLeave={() => setIsGuide(false)}>
                <span>
                    <FontAwesomeIcon icon={faCircleQuestion} />{' '}
                </span>
                See how
            </div>
        </div>
    );
}

export default QrCode;
