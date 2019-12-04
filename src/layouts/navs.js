import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import history from '../utils/history'


export default class navs extends Component {
  // 使用Router组件, 创建自己history
  change = (e) => {
    let type = e.target.id;
    switch (type) {
      case 'home':
        history.push('/')
        break;
      case 'edit':
        history.push('/edit')
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <nav>
        <p>
          <button id="home" onClick = { this.change }>首页</button> <button id="edit" onClick = { this.change }>编辑</button>
        </p>
        <Link to="/">home</Link>
        <Link to="/edit">edit</Link>
      </nav>
    )
  }
}
