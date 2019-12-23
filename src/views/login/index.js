import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../store/reducers/loginReducer'

export class Login extends Component {
  loginHandler = () => {
    var username = this.refs.user.value
    var password = this.refs.pwd.value

    this.props.toLoginIn(username, password)   //saga侦听--> take(loginTypes.login_in)
  }

  render() {
    return (
      <div>
        <p>用户名: <input type="text" ref="user"/></p>
        <p>密码: <input type="password" ref="pwd" /></p>
        <button onClick= {this.loginHandler}>登录</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
