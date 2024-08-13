import React from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';

const ColorPicker = () => {
    const [color, setColor] = useLocalStorageState('color', 'teal');
    const changeColor = e => {
        setColor(e.target.value)    
    }
    return (
        <>
            <h1 style={{ color }}>Your Color Is {color}</h1>
            <select name="colors" id="colors" value={color} onChange={changeColor}>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="teal">Teal</option>
            </select>
        </>
    );
};

export default ColorPicker;