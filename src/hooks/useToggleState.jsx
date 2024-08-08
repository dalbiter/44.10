
// Making a piece of state - starts as true or false
// making a function to toggle state from t/f or f/t
// const [isHappy, setIsHappy] = useState(true);
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     const toggleMood = () => {
//         setIsHappy(!isHappy);
//         // setIsHappy(mood => !mood); is another way using callback form
//     };
//     const toggleDarkMode = () => {
//         setIsDarkMode(mode => !mode);
//     };

import React, { useState } from 'react';

const useToggleState = (initialState = true) => {
    const [state, setState] = useState(initialState)
    const toggleState = () => {
        setState(state => !state)    
    };
    return [state, toggleState];    
};

export default useToggleState;