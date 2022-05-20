import React, { useState } from 'react';
import LeagueList from './LeagueList';
import MenuList from './MenuList';

function Menu() {
    const [step, setStep] = useState({ step: 1, type: null });
    if (step.step === 1) {
        return <MenuList setStep={setStep} />;
    } else if (step.step === 2) {
        switch (step.type) {
            case 'leagues':
                return <LeagueList setStep={setStep} />;

            default:
                <MenuList setStep={setStep} />;
        }
    }
}

export default Menu;
