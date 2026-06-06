import React from 'react'
import '../styles/ordonnance.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Ordonnancespast = () => {
  const ordonnances = [
    {
      id: 1,
      date: '17/05/2026',
      medecin: 'Dr Martin',
      medicaments: [
        'Levothyrox 50µg - 1 comprimé avantle petit-déjeuner pendant 5 jours',
        'Vitamine D - 1 gélule 1 fois'
      ]
    },
    {
      id: 2,
      date: '28/04/2026',
      medecin: 'Dr Martin',
      medicaments: [
        'Doliprane 1000mg - 1 cachet avant le dîner pendant 1 semaine',
        'Amoxicilline - 1 cuillère avant le coucher pendant 1 semaine'
      ]
    },
    {
      id: 3,
      date: '22/03/2026',
      medecin: 'Dr Bernard',
      medicaments: [
        'Oméprazole - 1 gélule pendant le dîner pendant 1 semaine',
        'Spasfon - 2 comprimés en cas de douleurs intenses'
      ]
    }
  ]

  const navigate = useNavigate()

  return (
    <div className="page">
      <Header />
      <main className="ordonnance-page">
        <div className="ordonnance-container">
          <h1>Ordonnances passées</h1>
          <p className="subtitle">
            Retrouvez l'ensemble de vos prescriptions archivées.
          </p>
          <button className="back-btn" onClick={() => navigate('/history')}>← Retour au compte</button>
          {ordonnances.map((ordonnance) => (
            <div
              key={ordonnance.id}
              className="ordonnance-card"
            >
              <div className="ordonnance-header">
                <h2>
                  Ordonnance du {ordonnance.date}
                </h2>
                <span className="doctor-badge">
                  {ordonnance.medecin}
                </span>
              </div>
              <div className="ordonnance-content">
                <h3>Médicaments prescrits</h3>
                <ul>
                  {ordonnance.medicaments.map((medicament, index) => (
                    <li key={index}>
                      {medicament}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ordonnance-actions">
                <button className="view-btn">
                  Consulter
                </button>
                <button className="download-btn">
                  Télécharger PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Ordonnancespast