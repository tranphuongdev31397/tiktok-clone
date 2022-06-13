import React, { createRef, forwardRef, useCallback, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './SelectBox.module.scss';
import Tippy from '@tippyjs/react/headless';
import TippyWrapper from '../TippyWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SelectBox({
    className,
    widthBox = null,
    placeholder = null,
    listSelect = [
        {
            id: 'vie',
            value: 'VIE (+84)',
            text: 'Vietnam +84',
        },
        {
            id: 'thai',
            value: 'THA (+24)',
            text: 'Thailand +24',
        },
        {
            id: 'comb',
            value: 'COM (+44)',
            text: 'Combodia +44',
        },
    ],
    children,
    ...props
}) {
    const [value, setValue] = useState(placeholder ? null : listSelect[0].value);
    const [isToggle, setIsToggle] = useState(false);
    const [active, setActive] = useState(placeholder ? null : 0);

    return (
        <Tippy
            delay={[0, 0]}
            trigger={'click'}
            interactive
            placement={'bottom-start'}
            onTrigger={() => {
                setIsToggle(true);
            }}
            onUntrigger={() => {
                setIsToggle(false);
            }}
            onHide={() => {
                setIsToggle(false);
            }}
            render={(attrs) => (
                <div className={cx('tippy-box', [widthBox])} tabIndex="-1" {...attrs}>
                    <TippyWrapper className={cx('custom__wrapper')}>
                        <ul className={cx('list')}>
                            {listSelect.map((item, idx) => {
                                return (
                                    <li
                                        className={cx('list__item', active === idx ? 'active' : '')}
                                        key={item.id}
                                        onClick={() => {
                                            setValue(item.value);
                                            setActive(idx);
                                        }}
                                    >
                                        <span> {item.text}</span>
                                        {active === idx && (
                                            <span>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </TippyWrapper>
                </div>
            )}
        >
            <div className={cx('select__container')}>
                <input
                    className={cx('select', 'reset-input', [className])}
                    readOnly
                    value={value}
                    placeholder={placeholder}
                    {...props}
                />
                <div className={cx('select__icon')}>
                    <FontAwesomeIcon icon={isToggle ? faCaretUp : faCaretDown} />
                </div>
            </div>
        </Tippy>
    );
}

export default forwardRef(SelectBox);
