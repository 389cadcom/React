import React from 'react'
import { Prompt } from 'react-router'
// import PropTypes from 'prop-types'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = { dirty: false }
  }
  onInput = (e) => {
    const isShow = !!e.target.value.trim()
    this.setState({ dirty: isShow })
  }

  render() {
    return (
      <div>
        <h3>Form</h3>
        <input type="text" onInput={this.onInput} />
        <Prompt
          when={this.state.dirty}
          message="数据尚未保存，确定离开？" />
      </div>
    )
  }
}

export default Edit

