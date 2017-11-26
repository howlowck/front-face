import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../HomePage'

class App extends Component {
  render () {
    return (<div>
      {/* <header>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About</Link>
      </header> */}

      <main>
        <Route exact path='/' component={Home} />
      </main>
    </div>)
  }
}

export default App
