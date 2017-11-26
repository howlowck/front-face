import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/store'
import AppComponent from './components/App'
// import registerServiceWorker from './registerServiceWorker'

import './index.css'

const target = document.querySelector('#root')
const App = () => (<Provider store={store}>
  <ConnectedRouter history={history}>
    <AppComponent />
  </ConnectedRouter>
</Provider>)

ReactDOM.render(
  <App />,
  target
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  })
}

// registerServiceWorker()
