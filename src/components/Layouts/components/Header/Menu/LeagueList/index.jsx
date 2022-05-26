import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LeagueList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LeagueList({ setStep }) {
    const [active, setActive] = useState(0);

    const leagues = ['English', 'Vietnamese'];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-area')}>
                <div className={cx('back')} onClick={() => setStep({ step: 1 })}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className={cx('title')}>Leagues</div>
            </div>
            <ul className={cx('content')}>
                {leagues.map((league, idx) => {
                    return (
                        <li
                            key={idx}
                            className={cx('list-item', `${active === idx && 'active'}`)}
                            onClick={() => setActive(idx)}
                        >
                            {league}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default LeagueList;
