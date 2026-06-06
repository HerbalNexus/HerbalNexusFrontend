import React from 'react'
import '../styles/home.css'
import '../styles/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fond from '../assets/imagehome.jpeg'

const Home = () => {
  return (
    <div className="page">
      <Header />
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
            <a href="Login" className="btn btn-night btn-md">Se connecter</a>
            <a href="Register" className="btn btn-petrol btn-md">S'inscrire</a>
            <br></br><br></br>
            <p>
              <em>À noter : HerbalNexus ne remplace pas un médecin ou un pharmacien, il vous aide à mieux comprendre les riques potentiels et à engager le dialogue avec un professionnel de santé.</em>
            </p>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home