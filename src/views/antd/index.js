import React, { Component } from 'react'
import Form from './page/form'
import Picker from './page/picker'
import Icon from './page/icon'
import List from './page/list'
import Feedback from './page/feedback'
import ListView from './page/list-view'
import { Link, Switch, Route } from 'react-router-dom'

export default class Antd extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to="/antd/">主页</Link>
          <Link to="/antd/list">列表</Link>
          <Link to="/antd/form">表单</Link>
          <Link to="/antd/picker">选择器</Link>
          <Link to="/antd/icon">Icon</Link>
          <Link to="/antd/feedback">提示</Link>
        </nav>
        <Switch>
          <Route path="/antd/" exact component={ ListView }/>
          <Route path="/antd/list" component={ List }/>
          <Route path="/antd/form" component={ Form }/>
          <Route path="/antd/picker" component={ Picker }/>
          <Route path="/antd/icon" component={ Icon }/>
          <Route path="/antd/feedback" component={ Feedback }/>
        </Switch>
      </>
    )
  }
}
