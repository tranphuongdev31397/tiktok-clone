import React from 'react';
import Popup from '..';
import DefaultContent from '../DefaultContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './KeyBoard.module.scss';

const cx = classNames.bind(styles);

function KeyBoardPopup({ stateIsShow }) {
    return (
        <Popup stateIsShow={stateIsShow} iconBox={cx('icon__box')}>
            <DefaultContent className={cx('keyboard__popup')} title={'Keyboard shortcuts'}>
                <div className={cx('keyboard__item')}>
                    <span>Go to previous video</span>
                    <span className={cx('key', 'flex-center')}>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </span>
                </div>
                <div className={cx('keyboard__item')}>
                    <span>Go to next video</span>
                    <span className={cx('key', 'flex-center')}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                </div>
                <div className={cx('keyboard__item')}>
                    <span>Like video</span>
                    <span className={cx('key', 'flex-center')}>L</span>
                </div>
                <div className={cx('keyboard__item')}>
                    <span>Mute / unmute video</span>
                    <span className={cx('key', 'flex-center')}>M</span>
                </div>
            </DefaultContent>
        </Popup>
    );
}

export default KeyBoardPopup;
