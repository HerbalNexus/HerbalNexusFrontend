import React, { use } from 'react'
import { useState } from 'react';

export default function TextBubble({ value, label, onDelete }) {
    const [isLabelVisible, setLabelVisible] = useState(false);

    const handleClick = () => {
        setLabelVisible(!isLabelVisible);
    }

    return (<>
    <div className="flex items-center w-max max-w-xs bg-sauge rounded-md px-2 py-1 mb-1">
        <div className="flex items-center gap-1 hover:cursor-pointer" onClick={handleClick}>
            <p className="font-bold text-white">{value}</p>
            {isLabelVisible && <span className="text-s text-gray-300">{label}</span>}
        </div>
        <button type="button" className="ml-2 font-bold  text-slate hover:text-petrol-light hover:cursor-pointer" onClick={onDelete}>X</button>
    </div>
    </>)
}