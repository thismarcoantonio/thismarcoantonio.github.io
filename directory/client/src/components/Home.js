import { h, Component } from 'preact'
import { Link } from 'preact-router'

import heroBackground from '../assets/images/background.jpg'

import MenuNav from './MenuNav'

class Home extends Component {
  render() {
    const checkLang = this.props.lang === 'pt';

    return (
      <main>
        <MenuNav />
        <section className="hero-section">
          <h1 className="hero__title">
            <span>{checkLang ? 'Olá Mundo, eu sou' : 'Hello World, I\'m'}</span>
            Marco Antônio
          </h1>

          <h2 className="hero__description">Front-end & Javascript Lover</h2>
          <div className="hero__langchoice">
            <button onClick={() => this.props.changeLanguage('pt')}>Português</button>
            <button onClick={() => this.props.changeLanguage('en')}>English</button>
          </div>
          <div className="hero__background">
            <img src={heroBackground} id="image" />
          </div>
        </section>

        <section className="about_section">
          <h1>
            <span>{ checkLang ? 'Um pouco' : 'A bit' }
            </span>{checkLang ? 'sobre mim' : 'about me'}</h1>
          <div>
            <p>
              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            </p>
            <p>
              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            </p>
            <Link to="/about.html"></Link>
          </div>
          <p></p>
        </section>
      </main>
    )
  }
}

export default Home;