import React from 'react'
import '../styles/alert.css'
import '../styles/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fond from '../assets/imagehome.jpeg'

const Alert3 = () => {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <section className="hero-banner">
          <div className="hero-bg" style={{ backgroundImage: `url(${fond})` }}></div>
            <div className="hero-center">
              <div className="alert-level-3">🚨 Alerte de niveau 3 :<br />
              Interaction dangereuse détectée<br />
              Ineraction documentée.<br />
              Risque clinique établi.<br />
              Source ANSM / Hedrine<br />
              <button className="alert-back-btn-3" onClick={() => window.history.back()}>Retour</button>
            </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Alert3