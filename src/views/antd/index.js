import React, { Component } from 'react'

import { Link, Switch, Route, NavLink } from 'react-router-dom'

export default class Antd extends Component {
  render() {
    let routes = this.props.route.children
    return (
      <>
        <nav>
          <NavLink exact to='/antd/'>主页</NavLink>
          <NavLink to='/antd/list'>列表</NavLink>
          <NavLink to='/antd/form'>表单</NavLink>
          <NavLink to='/antd/picker'>选择器</NavLink>
          <NavLink to='/antd/icon'>Icon</NavLink>
          <NavLink to='/antd/feedback'>提示</NavLink>
        </nav>
        {/* <Switch>
          <Route path="/antd/" exact component={ ListView }/>
          <Route path="/antd/list" component={ List }/>
          <Route path="/antd/form" component={ Form }/>
          <Route path="/antd/picker" component={ Picker }/>
          <Route path="/antd/icon" component={ Icon }/>
          <Route path="/antd/feedback" component={ Feedback }/>
        </Switch> */}
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                  // console.log(props)
                  return <route.component {...props} route={route} />
                }}
              />
            )
          })}
        </Switch>
      </>
    )
  }
}
