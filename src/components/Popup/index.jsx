import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popup.module.scss';
import IconButton from '../IconButton';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Popup({ classContent, stateIsShow, children, ...props }) {
    //stateIsShow từ useState bên ngoài
    const [isShow, setIsShow] = stateIsShow;

    return (
        <section className={cx('wrapper', isShow ? 'show' : 'hide')} {...props}>
            <div className={cx('container', isShow ? 'show' : 'hide')}>
                <div className={cx('box', isShow ? 'show' : 'hide')}>
                    <div
                        className={cx('content__box', {
                            [classContent]: classContent,
                        })}
                    >
                        {children}
                    </div>

                    <IconButton
                        classIconBox={cx('icon__box')}
                        className={cx('icon-x')}
                        onClick={() => setIsShow(false)}
                        icon={<FontAwesomeIcon icon={faXmark} />}
                    />
                </div>
            </div>
        </section>
    );
}

export default Popup;
