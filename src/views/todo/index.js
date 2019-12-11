import React from 'react'

import { login } from 'redux/auth';

class ToDo extends Component {

  onClick = (e) => {
    e.preventDefault();
    const { user, pass } = this.refs;
    this.props.dispatch(login(user.value, pass.value));
  }

  render() {
    return (<div>
        <input type="text" ref="user" />
        <input type="password" ref="pass" />
        <button onClick={ this.onClick }>登录</button>
    </div>);
  }
}

export default connect((state) => ({}))(ToDo);
