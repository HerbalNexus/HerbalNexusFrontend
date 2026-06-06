import React, { useState } from 'react'
import '../styles/home.css'
import '../styles/style.css'
import '../styles/login.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fond from '../assets/imagehome.jpeg'
import Eye from '../assets/eye.png'

const Register = () => {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.email !== form.confirmEmail) {
      setError("Les emails ne correspondent pas")
      return
    }

    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      return
    }

    setError('')
    console.log("OK inscription", form)
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

              <h1><span className="herbal">Inscription</span> / <span className="nexus">Register</span></h1>

              <form className="form-grid" onSubmit={handleSubmit}>

              <input name="nom" placeholder="Nom" onChange={handleChange} />
              <input name="prenom" placeholder="Prénom" onChange={handleChange} />

              <input name="email" placeholder="Email" onChange={handleChange} />
              <input name="confirmEmail" placeholder="Confirmer email" onChange={handleChange} />

              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mot de passe"
                  onChange={handleChange}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
                  <img src={Eye} alt="voir mot de passe" />
                </button>
              </div>

              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirmer mot de passe"
                  onChange={handleChange}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
                  <img src={Eye} alt="voir mot de passe" />
                </button>
              </div>

              {error && <p className="error">{error}</p>}
            </form>

            <button className="btn btn-petrol btn-md submit-btn" type="submit">S'inscrire</button>
            <p className="signup-link">Déjà inscrit ? <a href="/login">Connectez-vous</a></p>
          </div>
        </div> 
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Register