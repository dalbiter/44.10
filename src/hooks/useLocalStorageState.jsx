import React, { useState, useEffect } from 'react';

const useLocalStorageState = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        // should technicall add a try/catch here. i.e. if you try to parse something that is not valid JSON it will break
        try {
            let value = window.localStorage.getItem(key) || defaultValue;
            return value;
        } catch(e) {
            alert(e)
        }
        
    });

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [state]);

    return [state, setState];
};

export default useLocalStorageState;

// const [count, setCount] = useState(() => {
//     let value;
//     value = JSON.parse(
//         window.localStorage.getItem('count') || 0
//     )
//     return value;
// });

// useEffect(() => {
//     window.localStorage.setItem('count', count);
// }, [count]);

// const addToCount = () => {
//     setCount(count => count + 1);
// };