import React from 'react';

//Component
import TippyWrapper from '../TippyWrapper';
import Image from '../Image';
import Button from '../Button';

//Other Library
import classNames from 'classnames/bind';
import styles from './AccountDetail.module.scss';
import Tippy from '@tippyjs/react/headless';
//Data
import { fakeUser } from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);
function AccountDetail({ children, user = fakeUser, className, typeBtn, hasBio = false }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <Tippy
            delay={[700, 0]}
            interactive
            placement={'bottom-start'}
            render={(attrs) => (
                <div className={cx('tippy-box')} tabIndex="-1" {...attrs}>
                    <TippyWrapper className={classes}>
                        <div className={cx('header')}>
                            <Image src={user.avatar} alt="avatarUserDetail" className={cx('avatar')} />
                            <Button
                                typeBtn={typeBtn}
                                Component={Link}
                                to={routesConfig.following}
                                placementText={'center'}
                            >
                                Follow
                            </Button>
                        </div>
                        <div className={cx('user__information')}>
                            <h5>
                                <span className={cx('nickname', 'text-ellipsis')}>{user.nickname}</span>
                                <span>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                                    </span>
                                </span>
                            </h5>
                            <p className={cx('full__name', 'text-ellipsis')}>{user.full_name}</p>
                            <p className={cx('user__stat')}>
                                <span className={cx('stat__num')}>{user.followers_count}</span>
                                <span className={cx('stat__text')}>Follower</span>
                                <span className={cx('stat__num')}>{user.likes_count}</span>
                                <span className={cx('stat__text')}>Likes</span>
                            </p>
                        </div>
                        {hasBio && user?.bio && (
                            <div className={cx('bio')}>
                                <p>{user.bio}</p>
                            </div>
                        )}
                    </TippyWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default AccountDetail;
