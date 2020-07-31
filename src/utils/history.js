import React, { Component } from 'react'
import {Router} from 'react-router-dom'
import {createBrowserHistory as createHistory } from 'history'

//router4使用 history
export default createHistory()


//源码
class BrowserRouter extends Component{
  history = createHistory(this.props);

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router history={this.history} children = {this.props.children} />
    )
  }
}
