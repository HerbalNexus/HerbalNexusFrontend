import React from 'react'
import '../styles/home.css'
import '../styles/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <section className="hero-banner">
          <div className="hero-center">
          <div className="hero-box">
          <h1>Vous n'êtes pas connecté sur<br /><span className="herbal">Herbal</span><span className="nexus">Nexus</span></h1>
            <br></br>
            <h2>Connectez-vous ou inscrivez-vous</h2><br></br>
            <a href="Login" className="btn btn-night btn-md">Se connecter</a>
            <a href="Register" className="btn btn-petrol btn-md">S'inscrire</a>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login