import React, { useState } from 'react';

const MoodClicker = () => {
    const [isHappy, setIsHappy] = useState(true)
    const toggleMood = () => {
        setIsHappy(!isHappy)
        // setIsHappy(mood => !mood) is another way using callback form
    }
    return (
        <div>
        <h1>{isHappy ? '😊' : '😒'}</h1>
        <button onClick={toggleMood}>Change Mood</button>
        </div>
    );
};

export default MoodClicker;