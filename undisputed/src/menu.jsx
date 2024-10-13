import React, { useState } from 'react';
import './menu.css'; // Import the CSS file

const Menu = () => {
    const [name, setName] = useState('');
    const [className, setClassName] = useState('');
    const [submittedTime, setSubmittedTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentTime = new Date().toLocaleString(); // Get current time
        setSubmittedTime(currentTime);
        console.log(`Name: ${name}, Class: ${className}, Time: ${currentTime}`);
        // You can handle form submission here (e.g., sending data to a server)
    };

    return (
        <div className="menu-container">
            <h1 className="menu-title">Class Registration</h1>
            <form className="menu-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="class">Class</label>
                    <input
                        type="text"
                        id="class"
                        list="classSuggestions"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        placeholder="Enter class name"
                        required
                    />
                  
                    <datalist id="classSuggestions">
                        <option value="Open Gym" />
                        <option value="Boxing" />
                        <option value="Muay Thai" />
                        <option value="Kids Boxing" />
                        <option value="Teen Boxing" />
                        <option value="Kids Muay Thai" />
                        <option value="Teen Muay Thai" />
                    </datalist>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            {submittedTime && (
                <div className="time-log">
                    <p>You logged in at: <strong>{submittedTime}</strong></p>
                </div>
            )}
        </div>
    );
};

export default Menu;
