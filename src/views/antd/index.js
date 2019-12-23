import React, { Component } from 'react'
import Form from './form'
import Flex from './flex'
import Icon from './icon'
import List from './list'
import ListView from './list-view2'
import Menu from './menu'
import { Link, Switch, Route } from 'react-router-dom'

export default class Antd extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to="/antd/">主页</Link>
          <Link to="/antd/list">列表</Link>
          <Link to="/antd/form">表单</Link>
          <Link to="/antd/icon">Icon</Link>
        </nav>
        <Switch>
          <Route path="/antd/" exact component={ ListView }/>
          <Route path="/antd/list" component={ List }/>
          <Route path="/antd/form" component={ Form }/>
          <Route path="/antd/icon" component={ Icon }/>
        </Switch>
      </>
    )
  }
}
