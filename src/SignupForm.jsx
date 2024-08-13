import React from 'react';
import useFields from './hooks/useFields';

const SignupForm = () => {
    const [formData, handleChange] = useFields({
        username: '',
        email: '',
        password: ''
    });
    return (
        <form action="">
            <label htmlFor="username">Username: </label>
            <input type="text" 
                   name="username" 
                   value={formData.username}
                   onChange={handleChange} 
                   placeholder='username'
            />
            <label htmlFor="username">Email: </label>
            <input type="text" 
                   name="email" 
                   value={formData.email}
                   onChange={handleChange}
                   placeholder='email' 
            />
            <label htmlFor="username">Password: </label>
            <input type="text" 
                   name="password" 
                   value={formData.password}
                   onChange={handleChange}
                   placeholder='password' 
            />
        </form>
    )
};

export default SignupForm;