import React, { useState } from 'react';
import LeagueList from './LeagueList';
import MenuList from './MenuList';

function Menu() {
    const [step, setStep] = useState(1);
    if (step === 1) {
        return <MenuList setStep={setStep} />;
    } else if (step === 2) {
        return <LeagueList setStep={setStep} />;
    }
}

export default Menu;
