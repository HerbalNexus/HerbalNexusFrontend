import React from 'react';
import { useState } from 'react';
import '../styles/TextBubble.css'; 

export default function TextBubble({ value, label, onDelete }) {
    const [isLabelVisible, setLabelVisible] = useState(false);

    const handleClick = () => {
        setLabelVisible(!isLabelVisible);
    };

    return (
        <div className="text-bubble-container">
            <div className="text-bubble-content" onClick={handleClick}>
                <p className="text-bubble-value">{value}</p>
                {isLabelVisible && (
                    <span className="text-bubble-label">{label}</span>
                )}
            </div>
            <button 
                type="button" 
                className="text-bubble-delete" 
                onClick={onDelete}
            >
                X
            </button>
        </div>
    );
}