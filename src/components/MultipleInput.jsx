import React from 'react'
import { useState } from 'react';

export default function MultipleInput() {
    const [inputs, setInputs] = useState(['', '', '']);
    return (<>
    <ul>
    {inputs.map((input, index) => (
        <li
            key={index}
        >{`Input ${index + 1}: ${input}`}</li>
    ))}
    </ul>
        <input type="text" placeholder="Input 3"    />
    </>)
}