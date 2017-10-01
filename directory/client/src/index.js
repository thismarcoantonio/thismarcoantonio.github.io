import { h, render } from 'preact'

import './assets/style/style.scss'

let root
function init() {
	let App = require('./components/App').default
	root = render(<App />, document.body, root)
}

if (module.hot) {
	module.hot.accept('./components/App', () => requestAnimationFrame(init) )
}

init()