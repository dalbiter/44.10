import React, { useState } from 'react';

const MoodClicker = () => {
    const [isHappy, setIsHappy] = useState(true)

    return (
        <div>
        <h1>{isHappy ? '=)' : '=('}</h1>
        <button onClick={changeMood}>Change Mood</button>
        </div>
    )
}