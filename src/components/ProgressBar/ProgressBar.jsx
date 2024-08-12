import React from 'react';
import './ProgressBar.css';

export default function ProgressBar({ activeSteps }) {
    const totalSteps = 5; // Fixed number of steps

    return (
        <div className="progress-bar">
            {[...Array(totalSteps)].map((_, index) => (
                <div 
                    key={index} 
                    className={`progress-step ${index < activeSteps ? 'active' : ''}`}
                ></div>
            ))}
        </div>
    );
}
