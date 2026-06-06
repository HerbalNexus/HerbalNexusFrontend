import React from 'react'
import { useState } from 'react';
import MultipleInput from '../components/MultipleInput';
import '../styles/style.css'
import '../styles/analyze.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Analyze = () => {
  const [medicaments, setMedicaments] = useState([]);
  const [complements, setComplements] = useState([]);
  const [autres, setAutres] = useState([]);


  const handleSubmit = (e) => {
    
  }

  return (
    <div className="page">
      <Header />
      <main className="content">
      <form onSubmit={handleSubmit}>
      <div className="form-content">
        <MultipleInput value={"Médicaments"} inputs={medicaments} setInputs={setMedicaments}/>
        <MultipleInput value={"Compléments"} inputs={complements} setInputs={setComplements}/>
        <MultipleInput value={"Autres"} inputs={autres} setInputs={setAutres}/>
      </div>
      <div className="flex justify-center" type="button">
        <button className="analyze-btn" type="submit">Analyser</button>
      </div>
      </form>
      </main>
      <Footer />
    </div>
  )
}

export default Analyze