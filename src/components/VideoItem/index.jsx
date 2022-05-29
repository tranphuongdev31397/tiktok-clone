import React from 'react';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Image from '../Image';
import { images } from '~/assets/images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import AccountDetail from '../AccountDetail';
import Button from '../Button';
import { videos } from '~/assets/videos';
import Video from '../Video';

const cx = classNames.bind(styles);
function VideoItem({ className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
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
            </div>
            <div className={cx('video__area')}>
                <Video src={videos.errorVideo} autoPlay muted className={cx('video')} videoClass={cx('video')} />
            </div>
        </section>
    );
}

export default VideoItem;
