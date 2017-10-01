import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Home from './Home'
import About from './About'

class App extends Component {  
	constructor() {
		super()
		this.changeLanguage = this.changeLanguage.bind(this)
	}

	state = {
		lang: 'pt'
	}

	changeLanguage(lang) {
		this.setState({ lang })
	}

	render () {
		return (
			<div>
				<Router>
					<Home changeLanguage={this.changeLanguage} lang={this.state.lang} path="/" />
					<About path="/about" />
				</Router>
			</div>
		)
	}
}

export default App