import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import TippyWrapper from '~/components/TippyWrapper';
import LeagueList from './LeagueList';
import MenuList from './MenuList';

const cx = classNames.bind(styles);
function Menu({ children, hideOnClick = false }) {
    const [step, setStep] = useState({ step: 1, type: null });
    const renderMenu = () => {
        if (step.step === 1) {
            return <MenuList setStep={setStep} />;
        } else if (step.step === 2) {
            switch (step.type) {
                case 'leagues':
                    return <LeagueList setStep={setStep} />;

                default:
                    return <MenuList setStep={setStep} />;
            }
        }
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement={'bottom-end'}
            render={(attrs) => (
                <div className={cx('menu__tippyBox')} tabIndex="-1" {...attrs}>
                    <>
                        <TippyWrapper className={cx('action__menu-wrapper')}>{renderMenu()}</TippyWrapper>
                    </>
                </div>
            )}
            onHide={() => setStep({ step: 1 })}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
