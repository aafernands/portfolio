import React from 'react';
import './about.css'; // Make sure to create and style this CSS file

const About: React.FC = () => {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src="logo.png" alt="Alex Fernandes Picture" />
            </div>
            <div className="about-text">
                <h2>About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
};

export default About;