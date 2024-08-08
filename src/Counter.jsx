import React, { useEffect, useState } from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';

const Counter = () => {

    const [count, setCount] = useLocalStorageState('count', 0)
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

    const addToCount = () => {
        setCount(count => count + 1);
    };

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={addToCount}>Add</button>
        </div>
    );
};

export default Counter;