import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './TippyShare.module.scss';
import { faFacebookF, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faCode, faLink } from '@fortawesome/free-solid-svg-icons';
import useToggleShow from '~/hooks/useToggleShow';
import TippyWrapper from '..';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';

const cx = classNames.bind(styles);
const shareArr = [
    {
        id: 'iconEmbed',
        title: 'Embed',
        icon: faCode,
        component: Link,
        customIcon: cx('custom__icon', 'iconEmbed'),
        props: {},
    },
    {
        id: 'iconPaperPlane',
        title: 'Share to Friend',
        icon: faPaperPlane,
        component: Link,
        customIcon: cx('custom__icon', 'iconPaperPlane'),
        props: {},
    },
    {
        id: 'iconFb',
        title: 'Share to Facebook',
        icon: faFacebookF,
        component: Link,
        customIcon: cx('custom__icon', 'iconFb'),
        props: {},
    },
    {
        id: 'iconWhatsApp',
        title: 'Share to WhatsApp',
        icon: faWhatsapp,
        component: Link,
        customIcon: cx('custom__icon', 'iconWhatsApp'),
        props: {},
    },
    {
        id: 'iconLink',
        title: 'Copy Link',
        icon: faLink,
        component: Link,
        customIcon: cx('custom__icon', 'iconLink'),
        props: {},
    },
    {
        id: 'iconTwitter',
        title: 'Send to Twitter',
        icon: faTwitter,
        component: Link,
        customIcon: cx('custom__icon', 'iconTwitter'),
        props: {},
    },

    {
        id: 'iconLinkedin',
        title: 'Send to Linkedin',
        icon: faLinkedinIn,
        component: Link,
        customIcon: cx('custom__icon', 'iconLinkedin'),
        props: {},
    },
];
function TippyShare({ children }) {
    const [result, isShow, setIsShow] = useToggleShow(shareArr);

    return (
        <Tippy
            arrow={roundArrow}
            interactive
            placement={'top-start'}
            render={(attrs) => (
                <div className={cx('tippy-box')} tabIndex="-1" {...attrs}>
                    <TippyWrapper>
                        <section className={cx('wrapper share')}>
                            {result.map((item) => (
                                <div className={cx('share__item')} key={item.id}>
                                    <Button
                                        icon={item.icon}
                                        customIcon={item.customIcon}
                                        Component={item.component}
                                        className={cx('link')}
                                        typeBtn="text"
                                        to="/"
                                    >
                                        <span className="text-default text600">{item.title}</span>
                                    </Button>
                                </div>
                            ))}
                            {!isShow && (
                                <Button
                                    Component="div"
                                    typeBtn="text"
                                    className={cx('share__item')}
                                    classNames={cx('show__more', 'link')}
                                    onClick={() => setIsShow(true)}
                                    placementText={'center'}
                                >
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </Button>
                            )}
                        </section>
                    </TippyWrapper>
                </div>
            )}
            onHide={() => setIsShow(false)}
        >
            {children}
        </Tippy>
    );
}

export default TippyShare;
