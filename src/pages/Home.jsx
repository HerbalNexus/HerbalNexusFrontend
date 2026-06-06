import React from 'react'
import '../styles/home.css'
import '../styles/style.css'

const features = [
  { 
    icon: 'ti-pill',
    title: 'Description',
    desc: `Certaines associatoins entre médicaments, plantes, compléments alimentaires et aliments peuvent présenter des risques.
    HerbalNexus vous aide à les identifier simplement des interactions potentielles.
    Renseignez vos traitementset ce que vous consommez : l'application détecte les combinaisons à risque, vous explique pourquoi et indique ses sources.
    À noter : HerbalNexus ne remplace pas un médecin ou un pharmacien, il vous aide à mieux comprendre les riques potentiels et à engager le dialogue avec un professionnel de santé.`
  }
]

const alertLevels = [
  {
    cls: 'a1',
    icon: 'ti-alert-circle',
    title: 'Niveau 1 — Rouge · Risque clinique établi',
    desc: 'Interaction documentée. Risque clinique établi. Source ANSM / Hedrine.',
    note: 'Rouge saturé froid — évoque la rigueur scientifique du laboratoire.',
  },
  {
    cls: 'a2',
    icon: 'ti-alert-triangle',
    title: 'Niveau 2 — Orange ambre · Interaction probable',
    desc: 'Mécanisme enzymatique connu, non directement documenté.',
    note: "L'ambre évoque la prudence sans la panique — procéder avec soin.",
  },
  {
    cls: 'a3',
    icon: 'ti-info-circle',
    title: 'Niveau 3 — Vert sauge · Signal à surveiller',
    desc: 'Signal hypothétique, non validé cliniquement.',
    note: 'Signale "information à surveiller" sans déclencher de stress.',
  },
]

const Home = () => {
  return (
    <div>
      <section className="hero-banner">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>
            Bienvenue sur<br />
            <span>Herbal</span>Nexus
          </h1>
          <p className="hero-sub">
            Vérifiez vos combinaisons avant de les prendre.
          </p>
        </div>
      </section>

      <div className="hero-sep">
        <hr />
        <span>Comment ça fonctionne</span>
        <hr />
      </div>

      <section className="features">
        {features.map((f) => (
          <div className="feat-card" key={f.title}>
            <div className="feat-icon">
              <i className={`ti ${f.icon}`} aria-hidden="true" />
            </div>
            <h3>{f.title}</h3>
            {f.desc.split('\n').map((line, idx) => (
              <p key={idx} >{line}</p>
            ))}
          </div>
        ))}
      </section>

      <section className="cta-block">
        <div className="cta-inner">
          <h2>Prêt à vérifier vos combinaisons ?</h2>
          <p>
            Créez votre compte gratuitement et lancez votre première analyse en moins
            d'une minute.
          </p>
          <a to="/compte" className="btn btn-night btn-md">
            Se connecter
          </a>
          <a to="/compte" className="btn btn-petrol btn-md">
            S'inscrire
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home

