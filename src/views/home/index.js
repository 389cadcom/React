import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './index.scss'

class Home extends Component {
  state = { num: 0, show: true }

  onToggle = () => {
    this.setState({ show: !this.state.show })
    /* this.setState( state=> { return {
      num: (state.num + 1) % 2
    }}) */
  }

  render() {
    const { show, num } = this.state
    return (
      <div className={'container'}>
        <CSSTransition in={show} timeout={300} classNames="star" unmountOnExit>
          <div className="star">⭐</div>
        </CSSTransition>
        <button onClick={this.onToggle}>toggle</button>
      </div>
    )
  }
}

/**
 * 高阶组件--处理同一操作组件
 * @param {*} MixinComponent
 */
let Mixin = MixinComponent => class Container extends Component {
  state = {
    val: 0
  }
  update = ()=>{
    // this.setState( state => ({ val: state.val + 1 }))
    this.setState({val: this.state.val+1})
  }
  render(){
    return (
      <MixinComponent update={this.update} {...this.state} {...this.props} />
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.update}>
      {props.txt} - {props.val}
    </button>
  )
}

const Label = (props) => {
  return (
    <label onMouseMove={props.update}>
      {props.txt} - {props.val}
    </label>
  )
}

//使用高阶组件
// export default Mixin(Button)

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class Mixins extends Component {
  render(){
    return (
      <div>
        <ButtonMixed txt="button" />
        <LabelMixed txt="label" />
      </div>
    )
  }
}

export default Mixins;
