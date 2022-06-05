import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '../Image';
import { images } from '~/assets/images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import AccountDetail from '../AccountDetail';
import Button from '../Button';
import Video from '../Video';
import IconButton from '../IconButton';
import TippyShare from '../TippyWrapper/TippyShare';

const cx = classNames.bind(styles);
function VideoItem({ className, videoSrc }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const [isAnimation, setIsAnimation] = useState(false);

    return (
        <section className={classes}>
            <div className={cx('video__header')}>
                <AccountDetail typeBtn="outline" hasBio>
                    <Link to={'/'} className={cx('link')}>
                        <Image src={images.errorImage} alt="avatarAccItem" className={cx('avatar')} />
                    </Link>
                </AccountDetail>
                <div className={cx('video__user-information')}>
                    <AccountDetail typeBtn="outline" hasBio>
                        <Link className={cx('link')} to={'/'}>
                            <span className={cx('nickname')}>NickName</span>
                            <span className={cx('fullName')}>FullName</span>
                        </Link>
                    </AccountDetail>
                    <p className={cx('content')}>
                        Every day the sun rises. At the age of ninety-three, my grandmother began to wear her hair up. #
                        meatball head # Maruko hairstyle
                    </p>
                    <Link className="link flex-start" to={'/'}>
                        <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
                        <span>music</span>
                    </Link>
                </div>

                <Button typeBtn="outline" size="small" placementText="center" classNames={cx('follow__button')}>
                    Follow
                </Button>
                <Button typeBtn="shadow" size="small" placementText="center" classNames={cx('follow__button')}>
                    Following
                </Button>
            </div>
            <div className={cx('video__container')}>
                <div className={cx('video__area')}>
                    <Video
                        src={videoSrc}
                        placementVolBar={'top'}
                        loop
                        preload={'true'}
                        data-ignore
                        videoClass={cx('video')}
                    />
                </div>
                <div className={cx('video__action')}>
                    <IconButton
                        icon={<FontAwesomeIcon icon={faHeart} />}
                        number={21300}
                        animation={isAnimation ? cx('animation') : ''}
                        onClick={() => setIsAnimation(!isAnimation)}
                    />
                    <Link to="/following" className="link">
                        <IconButton icon={<FontAwesomeIcon icon={faCommentDots} />} number={21300} />
                    </Link>

                    <TippyShare>
                        <IconButton icon={<FontAwesomeIcon icon={faShare} />} number={21300} />
                    </TippyShare>
                </div>
            </div>
        </section>
    );
}

export default VideoItem;
