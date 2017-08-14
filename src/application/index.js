import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home'
import Admin from './admin'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='site-wrapper'>
          <Route path='/' component={Home} />
          <Route path='/admin' component={Admin} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
