import React, { useState } from 'react'
import '../styles/style.css'
import '../styles/history.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fond from '../assets/imagehome.jpeg'

const History = () => {
  const [email, setEmail] = useState('jean.dupont@email.fr')
  const [editingEmail, setEditingEmail] = useState(false)

  const handleSaveEmail = (e) => {
  e.preventDefault();
  console.log("Nouvel email :", email);
  setEditingEmail(false);
  };

  return (
    <div className="page">
      <Header />
      <main className="account-page">
        <div className="account-container">
          <h1><b>Mon Compte</b></h1>
          <section className="account-card">
            <h2>Informations personnelles</h2>
            <div className="profile-grid">
              <div>
                <span>Nom</span>
                <p>Dupont</p>
              </div>
              <div>
                <span>Prénom</span>
                <p>Jean</p>
              </div>
              <div>
                <span>Date de naissance</span>
                <p>01/01/1993</p>
              </div>
              <div>
                <span>Email</span>
                {editingEmail ? (
                  <form
                    className="email-section"
                    onSubmit={handleSaveEmail}
                  >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="save-icon"
                  >✔</button>
                  </form>
                  ) : (
                  <div className="email-section">
                    <p>{email}</p>
                    <button
                      className="edit-icon"
                      onClick={() => setEditingEmail(true)}
                      title="Modifier l'email"
                    >⚙️</button>
                  </div>
                  )
                }
              </div>
              <div>
                <span>Membre depuis</span>
                <p>Mai 2025</p>
              </div>
            </div>
          </section>

          <section className="account-card">
            <h2>Historique des analyses</h2>
            <div className="history-item">
              <div>
                <strong>Millepertuis + Fluoxétine</strong>
                <p>05/06/2026</p>
              </div>
              <span className="badge badge-danger">
                Niveau 3
              </span>
            </div>

            <div className="history-item">
              <div>
                <strong>Curcuma + Warfarine</strong>
                <p>12/05/2026</p>
              </div>
              <span className="badge badge-warning">
                Niveau 2
              </span>
            </div>

            <div className="history-item">
              <div>
                <strong>Vitamine D + Levothyrox</strong>
                <p>08/04/2026</p>
              </div>
              <span className="badge badge-safe">
                Niveau 1
              </span>
            </div>
          </section>

          <section className="account-card">
            <h2>Mes documents</h2>
            <div className="folder-grid">
              <div className="folder-card">
                <div className="folder-icon">📁</div>
                <h3>Ordonnances actuelles</h3>
                <p>Consulter les prescriptions en cours.</p>
                <button className="folder-btn">Ouvrir</button>
              </div>
              <div className="folder-card">
                <div className="folder-icon">🗂️</div>
                <h3>Ordonnances passées</h3>
                <p>Historique des prescriptions archivées.</p>
                <button className="folder-btn">Ouvrir</button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default History