import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import history from '../utils/history'

import { Button, WingBlank } from 'antd-mobile'

export default class navs extends Component {
  // 使用Router组件, 创建自己history
  change = (e) => {
    let type = e.target.id
    let path = type == 'home' ? '/' : '/' + type

    history.push(path)
  }

  render() {
    return (
      <nav>
        <WingBlank>
          <Button id='home' size='small' type='primary' inline onClick={this.change}> 首页 </Button>
          <Button id='edit' size='small' type='primary' inline onClick={this.change}> 编辑 </Button>
          <Button id='antd' size='small' type='primary' inline onClick={this.change}> UI </Button>
          <Button size='small' type='ghost' loading inline> btn </Button>
          <Button size='small' type="warning" icon='search' inline> sea </Button>
        </WingBlank>
        <Link to='/'>home</Link>
        <Link to='/edit'>edit</Link>
        <Link to='/antd'>UI</Link>
      </nav>
    )
  }
}
