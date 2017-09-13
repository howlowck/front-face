// import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'

// class App extends Component {
//   render () {
//     return (
//       <div className='App'>
//         <div className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className='App-intro'>
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     )
//   }
// }

// export default App
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../HomePage'

class App extends Component {
  render () {
    return (<div>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About</Link>
      </header>

      <main>
        <Route exact path='/' component={Home} />
      </main>
    </div>)
  }
}

export default App
