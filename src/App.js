import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions as appActions } from './store/reducers/appReducer'

import history from './utils/history'
import routes from './routes'
import Navs from './layouts/navs.js'

import './App.css'
import logo from './assets/images/logo.svg'

/* 装饰器
@connect(
  state => ({
    num: state.appReducer.num
  }),
  { ...appActions }
)
*/
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
        <section style={{ padding: '15px 0' }}>
          Redux Demo: {this.props.num} <button onClick={ this.addHandler }>redux+</button>
        </section>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <Switch>
          { routes.map((router, k) => ( <Route {...router} key={k} /> )) }
        </Switch>
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
