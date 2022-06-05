import { useEffect, useState } from 'react';

function useToggleShow(initialArr, initShow = false, defaultShow = 5) {
    const defaultArr = initialArr;
    const spliceArr = initialArr.slice(0, defaultShow);
    const [latestArr, setLatestArr] = useState(initShow ? defaultArr : spliceArr);

    const [isShow, setIsShow] = useState(initShow);
    useEffect(() => {
        if (isShow) {
            setLatestArr(defaultArr);
        } else {
            setLatestArr(spliceArr);
        }
    }, [isShow, initialArr]);
    return [latestArr, isShow, setIsShow];
}

export default useToggleShow;
