'use strict'

import React from 'react'
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

export default Admin
