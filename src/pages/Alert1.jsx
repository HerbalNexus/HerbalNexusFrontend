import React from 'react'
import '../styles/alert.css'
import '../styles/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fond from '../assets/imagehome.jpeg'

const Alert1 = () => {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <section className="hero-banner">
          <div className="hero-bg" style={{ backgroundImage: `url(${fond})` }}></div>
            <div className="hero-center">
              <div className="alert-level-1">✅ Alerte de niveau 1 : interaction faible détectée<br />
              Signal simulé.<br />
              Hypothétique, non validé cliniquement.<br />
              Confiance graduée.<br />
              <button className="alert-back-btn-1" onClick={() => window.history.back()}>Retour</button>
              </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Alert1