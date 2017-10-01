import { h, Component } from 'preact'
import { Link } from 'preact-router'
import { PreactCSSTransitionGroup } from 'preact-css-transition-group'

class MenuNav extends Component {
  scrollFix() {
    const getCheck = document.getElementById('hamburger').checked
    if(getCheck) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }
  render() {
    return (
      <div className="menu-container">
        <input 
          type="checkbox" 
          id="hamburger" 
          className="menu__checkbox" 
          onClick={this.scrollFix} />
        <label htmlFor="hamburger" className="menu__hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <PreactCSSTransitionGroup className="menu__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </PreactCSSTransitionGroup>
      </div>
    )
  }
}

export default MenuNav