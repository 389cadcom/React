import React, { useState, useEffect } from 'react'
import { Prompt } from 'react-router'

/**
 * react16.8 HooK
 * State,
 */
export default function Edit() {
  const [dirty, setDirty] = useState(false)
  useEffect(() => {
    document.title = `页面编辑是否未保存 ${dirty}`
  })
  return (
    <div>
      <h3>Form</h3>
      <input type="text" onInput={(e) => setDirty(!!e.target.value.trim())} />
      <Prompt when={dirty} message="数据尚未保存，确定离开？" />
    </div>
  )
}

class Example extends React.Component {
  state = {
    count: 0,
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`
  }
  //运算逻辑简单的直接使用行内迭代
/*   handler = (params) => {
    return (
      <div>
        {this.props.data.map(function(data, i) {
          return <Component data={data} key={i} />
        })}
      </div>
    )
  } */

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button className="btn" onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  }
}
