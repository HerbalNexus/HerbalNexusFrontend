import React, { useState } from 'react'
import '../styles/home.css'
import '../styles/style.css'
import '../styles/login.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fond from '../assets/imagehome.jpeg'

const Login = () => {
  const [identifiant, setIdentifiant] = useState('')
  const [motDePasse, setMotDePasse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ identifiant, motDePasse })
  }

  return (
    <div className="page">
      <Header />
      <main className="content">
        <section className="hero-banner">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${fond})` }}
          ></div>
          <div className="hero-center">
            <div className="hero-box">
              <h1><span className="herbal">Connexion</span> / <span className="nexus">Login</span></h1>

              <form onSubmit={handleSubmit} className="login-form">

                <div className="input-group">
                  <label>Identifiant</label>
                  <input
                    type="text"
                    placeholder="Identifiant"
                    value={identifiant}
                    onChange={(e) => setIdentifiant(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label>Mot de passe</label>
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    value={motDePasse}
                    onChange={(e) => setMotDePasse(e.target.value)}
                  />
                </div>

                <button className="btn btn-petrol btn-md submit-btn" type="submit">Se connecter</button>
                <p className="signup-link">Pas encore de compte ? <a href="/register">Inscrivez-vous</a></p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login