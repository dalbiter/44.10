import React, { useState } from 'react';

const useFields = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
        setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }));    
    };
    return [formData, handleChange];
};

export default useFields;
