import React from 'react'
import ReactDOM from 'react-dom'
import Editor from './editor'
// import Auth from './auth'

class Admin extends React.Component {
  render () {
    return (
      <div className='admin-wrapper'>
        <Editor />
      </div>
    )
  }
}

ReactDOM.render(
  <Admin />,
  document.getElementById('app')
)
