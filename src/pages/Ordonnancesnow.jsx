import React from 'react'
import '../styles/ordonnance.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Ordonnancesnow = () => {
  const ordonnances = [
    {
      id: 1,
      date: '02/06/2026',
      medecin: 'Dr Martin',
      medicaments: [
        'Onctose - crème à appliquer 3 fois par jour pendant 7 jours',
        'Cétirizine - 1 comprimé 1 fois par jour pendant 7 jours'
      ]
    },
  ]

  const navigate = useNavigate()

  return (
    <div className="page">
      <Header />
      <main className="ordonnance-page">
        <div className="ordonnance-container">
          <h1>Ordonnances actuelles</h1>
          <p className="subtitle">
            Retrouvez l'ensemble de vos prescriptions actuelles.
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

export default Ordonnancesnow