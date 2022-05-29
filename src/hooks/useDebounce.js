import { useEffect, useState } from 'react';

function useDebounce(value, time = 500) {
    const [latestValue, setLatestValue] = useState(value);
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLatestValue(value);
        }, time);

        return () => {
            clearTimeout(idTimeOut);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return latestValue;
}

export default useDebounce;
