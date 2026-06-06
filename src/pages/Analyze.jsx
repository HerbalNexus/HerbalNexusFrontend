import React from 'react'
import { useState } from 'react';
import MultipleInput from '../components/MultipleInput';


const Analyze = () => {
  const [medicaments, setMedicaments] = useState([]);
  const [complements, setComplements] = useState([]);
  const [autres, setAutres] = useState([]);


  const handleSubmit = (e) => {
    
  }


  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
      <MultipleInput value={"Médicaments"} inputs={medicaments} setInputs={setMedicaments}/>
      <MultipleInput value={"Compléments"} inputs={complements} setInputs={setComplements}/>
      <MultipleInput value={"Autres"} inputs={autres} setInputs={setAutres}/>
      <div className="flex justify-center" type="button">
        <button className="w-full m-5 hover:cursor-pointer bg-sauge hover:bg-petrol text-warm-white font-bold py-2 px-4 rounded mt-4" type="submit">Analyser</button>
      </div>
      </form>
    </div>
  )
}

export default Analyze

