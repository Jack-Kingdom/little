import React from 'react'
import ReactDOM from 'react-dom'
import Auth from './auth'

class Admin extends React.Component {
  render () {
    return (
      <div className='admin-wrapper'>
        <Auth />
      </div>
    )
  }
}

ReactDOM.render(
  <Admin />,
  document.getElementById('app')
)
