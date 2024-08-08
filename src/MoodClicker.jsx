import React, { useState } from 'react';
import './MoodClicker.css';

const MoodClicker = () => {
    const [isHappy, setIsHappy] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleMood = () => {
        setIsHappy(!isHappy);
        // setIsHappy(mood => !mood); is another way using callback form
    };
    const toggleDarkMode = () => {
        setIsDarkMode(mode => !mode);
    };
    return (
        <div className={isDarkMode ? 'MoodClicker-dark' : 'MoodClicker-light'}>
        <h1>{isHappy ? '😊' : '😒'}</h1>
        <button onClick={toggleMood}>Change Mood</button>
        <button onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
    );
};

export default MoodClicker;