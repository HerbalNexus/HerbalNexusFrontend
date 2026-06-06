import React from 'react'
import '../styles/style.css'
import logo from '../assets/logo.png'
import fond from '../assets/imagehome.jpeg'

const Header = () => {
  return (
    <nav className="nav">
    <a className="nav-brand">
     <img src={logo} alt="HerbalNexus" className="nav-logo-img" />
      <span className="nav-title"><span className="herbal">Herbal</span>Nexus</span>
    </a>

    <ul className="nav-links">
      <li><a href="/" className="active">Accueil</a></li>
      <li><a href="/analyser">Analyser</a></li>
      <li><a href="/connecter">Mon compte</a></li>
    </ul>
    </nav>
  )
}

export default Header

