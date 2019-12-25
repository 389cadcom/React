import React from 'react'
import Switch from 'react-router/Switch'
import Route from 'react-router/Route'
const renderRoutes = (routes, authed, authPath, extraProps = {}, switchProps = {}) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            if (!route.requiresAuth || authed || route.path === authPath) {
              return <route.component {...props} {...extraProps} route={route} />
            }
            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
          }}
        />
      ))}
    </Switch>
  ) : null
export default renderRoutes


//登陆之后返回原先要去的页面login函数
const login = (params) => {
  const { from } = this.props.location.state || { from: { pathname: '/' } }

  this.props.history.push(from.pathname)
}
