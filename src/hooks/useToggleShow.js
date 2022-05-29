import { useEffect, useState } from 'react';

function useToggleShow(initialArr, initShow = false, defaultShow = 5) {
    const spliceArr = [...initialArr];
    spliceArr.splice(defaultShow);
    const [latestArr, setLatestArr] = useState(initShow ? initialArr : spliceArr);
    const [isShow, setIsShow] = useState(initShow);
    useEffect(() => {
        if (isShow) {
            setLatestArr(initialArr);
        } else {
            setLatestArr(spliceArr);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShow, initialArr]);
    return [latestArr, isShow, setIsShow];
}

export default useToggleShow;
