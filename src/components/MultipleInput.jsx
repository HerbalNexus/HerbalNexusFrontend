import React from 'react'
import { useState } from 'react';
import TextBubble from './TextBubble';

export default function MultipleInput({ value, inputs, setInputs }) {

    const UNIT_LABELS = {
    daily: "jour",
    weekly: "semaine",
    monthly: "mois"
    };

    const [currentText, setCurrentText] = useState("");
    const [dose, setDose] = useState(1);
    const [frequencyUnit, setFrequencyUnit] = useState("daily");
    const [frequency, setFrequency] = useState(1);

    const handleFrequencyChange = (e) => {
        setFrequency(e.target.value);
    }

    const handleDoseChange = (e) => {
        setDose(e.target.value);
    }

    const handleFrequencyUnitChange = (e) => {
        setFrequencyUnit(e.target.value);
    }

    const handleAdd = (e) => {
        if (currentText === "") {
            return;
        }
        const newItem = {
                name: currentText,
                dose: Number(dose),
                frequency: Number(frequency),
                unit: frequencyUnit
            };
        const newInputs = [...inputs, newItem];
        setInputs(newInputs);
        clearText();
    }    

    const handleInputChange = (e) => {        
        setCurrentText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleAdd();
        }
    }

    const clearText = () => {
        setCurrentText("");
    }

    const handleDelete = (e,index) => {
        e.preventDefault()
        const newInputs = inputs.filter((input, i) => i !== index);
        setInputs(newInputs);
    }


    const getLabel = (input) => {
        return `${input.dose} cachet${input.dose > 1 ? 's' : ''}, ${input.frequency} fois par ${UNIT_LABELS[input.unit]}`
    }

    return (    
    <div className="rounded-md border bg-warm-white border-border-mid bg- p-4 m-5">
        <h2 className="text-2xl font-bold mb-4 text-night">{value}</h2>
        <ul className="flex flex-wrap gap-2">
        {inputs.map((input, index) => (
            <li
                key={index}
            >
                <TextBubble 
                    value={input.name}
                    label={getLabel(input)}
                    onDelete={(e) => handleDelete(e, index)}
                />
            </li>
        ))}
        </ul>
        <div className="flex flex-col gap-2 mt-2">
            <input className="max-w-md font-bold border text-night border-gray-300 rounded-md py-1 px-2 ring-2 ring-sauge focus:outline-none focus:ring-2 focus:ring-petrol" type="text" value={currentText} placeholder="Nom" onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    <input 
                        type="number" 
                        value={dose} 
                        onChange={handleDoseChange} 
                        min="1" 
                        className="w-16 font-bold border text-night border-gray-300 rounded-md py-1 px-2 ring-2 ring-sauge focus:outline-none focus:ring-2 focus:ring-petrol" 
                        placeholder="1"
                    />
                    <span className="font-bold text-night">cachet(s) et </span>
                    <input type="number" value={frequency}  onChange={handleFrequencyChange} min="1" className="w-16 font-bold border text-night border-gray-300 rounded-md py-1 px-2 ring-2 ring-sauge focus:outline-none focus:ring-2 focus:ring-petrol" placeholder="Fréquence"/>
                    <span className="font-bold text-night"> fois </span>
                    <select 
                        value={frequencyUnit} 
                        onChange={handleFrequencyUnitChange}
                        className="border border-gray-300 rounded-md py-1 px-2 text-night bg-white font-bold focus:outline-none"
                    >
                        <option value="daily">par jour</option>
                        <option value="weekly">par semaine</option>
                        <option value="monthly">par mois</option>
                    </select>          

                </div>
            </div>  
            <button className="max-w-md bg-sauge hover:bg-petrol text-warm-white font-bold py-1 px-4 rounded hover:cursor-pointer" type="button" onClick={handleAdd}>Ajouter</button>
        </div>
    </div>
    )
}