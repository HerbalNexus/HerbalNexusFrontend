import React from 'react';
import { useState } from 'react';
import TextBubble from './TextBubble';
import '../styles/MultipleInput.css';

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
    };

    const handleDoseChange = (e) => {
        setDose(e.target.value);
    };

    const handleFrequencyUnitChange = (e) => {
        setFrequencyUnit(e.target.value);
    };

    const handleAdd = () => {
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
    };    

    const handleInputChange = (e) => {        
        setCurrentText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
        }
    };

    const clearText = () => {
        setCurrentText("");
    };

    const handleDelete = (e, index) => {
        e.preventDefault();
        const newInputs = inputs.filter((input, i) => i !== index);
        setInputs(newInputs);
    };

    const getLabel = (input) => {
        return `${input.dose} cachet${input.dose > 1 ? 's' : ''}, ${input.frequency} fois par ${UNIT_LABELS[input.unit]}`;
    };

    return (    
        <div className="multiple-input-card">
            <h2 className="multiple-input-title">{value}</h2>
            <ul className="multiple-input-list">
                {inputs.map((input, index) => (
                    <li key={index} className="multiple-input-item">
                        <TextBubble 
                            value={input.name}
                            label={getLabel(input)}
                            onDelete={(e) => handleDelete(e, index)}
                        />
                    </li>
                ))}
            </ul>
            <div className="form-layout">
                <input 
                    className="input-text-field" 
                    type="text" 
                    value={currentText} 
                    placeholder="Nom" 
                    onChange={handleInputChange} 
                    onKeyDown={handleKeyDown}
                />
                <div className="form-layout-horizontal">
                    <div className="">
                        <input 
                            type="number" 
                            value={dose} 
                            onChange={handleDoseChange} 
                            min="1" 
                            className="input-number-field" 
                            placeholder="1"
                        />
                        <span className="text-highlight">cachet(s) et </span>
                        <input 
                            type="number" 
                            value={frequency}  
                            onChange={handleFrequencyChange} 
                            min="1" 
                            className="input-number-field" 
                            placeholder="Fréquence"
                        />
                        <span className="text-highlight"> fois </span>
                        <select 
                            value={frequencyUnit} 
                            onChange={handleFrequencyUnitChange}
                            className="select-field"
                        >
                            <option value="daily">par jour</option>
                            <option value="weekly">par semaine</option>
                            <option value="monthly">par mois</option>
                        </select>          
                    </div>
                </div>  
                <button 
                    className="btn-submit" 
                    type="button" 
                    onClick={handleAdd}
                >
                    Ajouter
                </button>
            </div>
        </div>
    );
}