import React, { Component } from 'react'
import { Router, Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions as appActions } from './store/reducers/appReducer'
import { renderRoutes } from 'react-router-config'

import history from './utils/history'
import routes from './routes'
import Navs from './layouts/navs.js'

import './App.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


/* 装饰器
@connect(
  state => ({
    num: state.appReducer.num
  }),
  { ...appActions }
)
*/
const maps = {
  PUSH: 'forward',
  POP: 'back'
}

const Routes = withRouter(({history, location}) => {
  console.log(history, location);
  return (
    <TransitionGroup childFactory={child => React.cloneElement(child, {
      classNames: maps[history.action]
    })}>
      <CSSTransition
        timeout={500}
        classNames={'fade'}
        unmountOnExit
        key={location.pathname}
      >
        { renderRoutes(routes) }
      </CSSTransition>
    </TransitionGroup>
  )}
);


export class App extends Component {
  //connect不传参情况,手动触发指定action
  argument = () => {
    let { dispatch } = this.props;
    dispatch( appActions.reduxAdd( 2 ) )             //手动触发指定action
  }

  addHandler = () => {
    // this.props.reduxAdd(this.props.num + 1)      //redux
    this.props.async()
  }
  render() {
    return (
      <Router history={history}>
        <Navs />
        <div style={{overflow:'hidden', height: '100%'}}>
          <section style={{ padding: '15px 0' }}>
            Redux Demo: {this.props.num} <button onClick={ this.addHandler }>redux+</button>
          </section>
          <Routes/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  num: state.appReducer.num,
})

const mapDispatchToProps = {
  ...appActions,
}

//若不传参, 则默认传入{ dispatch }
export default connect(mapStateToProps, mapDispatchToProps)(App)
