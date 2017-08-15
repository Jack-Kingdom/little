import React from 'react'
import CustomEditor from './editor'
// import Katex from 'katex'

class Editor extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: props.title,
      content: props.content
    }
  }

  render () {
    return (
      <div className='editor-container'>
        <CustomEditor />
        <p>hello world</p>
      </div>
    )
  }
}

export default Editor
