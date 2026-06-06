import React from 'react'
import '../styles/home.css'
import '../styles/style.css'
import logo from '../assets/logo.png'
import fond from '../assets/imagehome.jpeg'

const Home = () => {
  return (
    <div className="page">
      <nav className="nav">
        <a className="nav-brand">
          <img src={logo} alt="HerbalNexus" className="nav-logo-img" />
          <span className="nav-title"><span className="herbal">Herbal</span>Nexus</span>
        </a>

        <ul className="nav-links">
          <li><a href="index.html" className="active">Accueil</a></li>
          <li><a href="analyser.html">Analyser</a></li>
          <li><a href="compte.html">Mon compte</a></li>
        </ul>
      </nav>

      <main className="content">
        <section className="hero-banner">
          <div className="hero-bg" style={{ backgroundImage: `url(${fond})` }}></div>
          <div className="hero-center">
          <div className="hero-box">
          <h1>Bienvenue sur<br /><span className="herbal">Herbal</span><span className="nexus">Nexus</span></h1>
            <p className="hero-sub">Certaines associatoins entre médicaments, plantes, compléments alimentaires et aliments peuvent présenter des risques.<br></br>
              HerbalNexus vous aide à les identifier simplement des interactions potentielles.<br></br>
              Renseignez vos traitementset ce que vous consommez : l'application détecte les combinaisons à risque, vous explique pourquoi et indique ses sources.<br></br><br></br>
            </p>
            <br></br>
            <h2>Prêt à vérifier vos combinaisons ?</h2>
            <p>Créez votre compte gratuitement et lancez votre première analyse en moins d'une minute.</p><br></br>
            <a href="Login.html" className="btn btn-night btn-md">Se connecter</a>
            <a href="Register.html" className="btn btn-petrol btn-md">S'inscrire</a>
            <br></br><br></br>
            <p>
              <em>À noter : HerbalNexus ne remplace pas un médecin ou un pharmacien, il vous aide à mieux comprendre les riques potentiels et à engager le dialogue avec un professionnel de santé.</em>
            </p>
          </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        © 2026 HerbalNexus — Tous droits réservés · Outil d'aide à l'information, ne remplace pas un avis médical
      </footer>
    </div>
  )
}

export default Home