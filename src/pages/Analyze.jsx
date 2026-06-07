import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MultipleInput from '../components/MultipleInput';
import '../styles/style.css'
import '../styles/analyze.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Analyze = () => {
  const navigate = useNavigate(); //
  const [medicaments, setMedicaments] = useState([]);
  const [complements, setComplements] = useState([]);
  const [autres, setAutres] = useState([]);


const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
/*
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Fusionner toutes les entrées dans un seul tableau pour tout envoyer
    // (Ajustez selon la structure de vos objets si vos inputs ne sont pas de simples chaînes)
    const allInputs = [...medicaments, ...complements, ...autres];

    console.log("Données à analyser :", allInputs);

    try {
      // 2. Créer un tableau de promesses fetch
      const fetchPromises = allInputs.map(item =>
        fetch(`/api/v1/search?q="${item.name}"`)
          .then(res => {
            if (!res.ok) throw new Error(`Erreur pour le terme : ${item}`);
            return res.json();
          })
      );

      // 3. Exécuter toutes les requêtes en parallèle
      const results = await Promise.all(fetchPromises);
      
      // 4. Traiter l'ensemble des résultats obtenus
    const allEffects = results.flatMap(apiData => {
    
      // S'assurer que les résultats existent pour cette requête
    if (!apiData.results) return [];
    
    return apiData.results
      .map(result => result.objectif_effet)
      // Optionnel : Filtrer les chaînes vides ou non définies
      .filter(effet => effet && effet.trim() !== "");
  });


  console.log("Tous les objectifs/effets trouvés :", allEffects);      

    } catch (err) {
      console.error("Une erreur est survenue lors de l'analyse :", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

*/
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); 
  setError(null); // Clear any previous errors
  try {
    const pairs = [];

    medicaments.forEach(med => {
      complements.forEach(comp => {
        pairs.push({ medicament: med.name, complement: comp.name });
      });
    });

    medicaments.forEach(med => {
      autres.forEach(aut => {
        pairs.push({ medicament: med.name, complement: aut.name });
      });
    });

    complements.forEach(comp => {
      autres.forEach(aut => {
        pairs.push({ medicament: comp.name, complement: aut.name });
      });
    });

    for (let i = 0; i < medicaments.length; i++) {
      for (let j = i + 1; j < medicaments.length; j++) {
        pairs.push({ medicament: medicaments[i].name, complement: medicaments[j].name });
      }
    }

    for (let i = 0; i < complements.length; i++) {
      for (let j = i + 1; j < complements.length; j++) {
        pairs.push({ medicament: complements[i].name, complement: complements[j].name });
      }
    }



    if (pairs.length === 0) {
      console.log("Aucune combinaison à analyser.");
      setLoading(false);
      return;
    }

    console.log(`Nombre total de combinaisons à tester : ${pairs.length}`, pairs);

    const fetchPromises = pairs.map(pair =>
      fetch('/interaction-api/v1/interaction', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          medicament: pair.medicament,
          complement: pair.complement
        })
      }).then(res => {
        if (!res.ok) throw new Error("Erreur API Interaction");
        return res.json();
      })
    );

    const results = await Promise.all(fetchPromises);

    const severityScale = {
      "CRITIQUE": 3,
      "DANGER": 2,
      "ATTENTION": 1,
      "AUCUNE": 0
    };

    let worstInteraction = null;
    let maxSeverity = -1;

    results.forEach(res => {
      const currentSeverity = severityScale[res.alert] || 0;

      if (currentSeverity > maxSeverity) {
        maxSeverity = currentSeverity;
        worstInteraction = res; 
      }
    });

  const alertRoutes = {
    "CRITIQUE": "/alerte4",
    "DANGER": "/alerte3",
    "ATTENTION": "/alerte2",
    "AUCUNE": "/alerte1"
  };
    if (worstInteraction) {
      const targetRoute = alertRoutes[worstInteraction.alert] || "/alerte1";
      console.log(`Pire alerte : ${worstInteraction.alert}. Redirection vers : ${targetRoute}`);
      console.log("Détails du problème :", worstInteraction.reason);
      navigate(targetRoute, { 
          state: { 
            reason: worstInteraction.reason,
            medicament: worstInteraction.medicament,
            complement: worstInteraction.complement
          } });
   }

  } catch (err) {
    console.error("Une erreur est survenue lors de l'analyse globale :", err);
    setError(err.message);
  } finally {
    setLoading(false);
  };
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
      {error && (
        <div className="error-banner" style={{ color: '#d9534f', textAlign: 'center', margin: '15px 0', fontWeight: 'bold' }}>
          ⚠️ {error}
        </div>
      )}
      <div className="flex justify-center">
        <button className="analyze-btn" type="submit">
          {loading ? "En cours..." : "Analyser"}
        </button>
      </div>
      </form>
      </main>
      <Footer />
    </div>
  )
};

export default Analyze