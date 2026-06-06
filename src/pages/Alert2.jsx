import React from 'react'
import '../styles/alert.css'
import '../styles/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fond from '../assets/imagehome.jpeg'
import { useNavigate } from "react-router-dom";

const Alert2 = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <Header />
      <main className="content">
        <section className="hero-banner">
          <div className="hero-bg" style={{ backgroundImage: `url(${fond})` }}></div>
            <div className="hero-center">
              <div className="alert-level-2">⚠️ Alerte de niveau 2 :<br />
              Interaction probable détectée<br />
              Interaction probable.<br />
              Mécanisme enzymatique connu.<br />
              Non directement documenté.<br />
              </div>
              <div className="alert-recommendation">
                <p className="alert-reco-text">
                  Recommandation : consulter un professionnel de santé pour évaluer les risques et ajuster le traitement si nécessaire.
                </p>
                <div className="alert-actions">
                  <button className="btn-ignore" onClick={() => navigate("/history")}>Ignorer la recommandation</button>
                  <button className="btn-qrcode">Générer le QR code d'un professionnel de santé</button>
                  <button className="btn-back" onClick={() => navigate("/analyser")}>Revenir à la page précédente</button>
                </div>
              </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Alert2