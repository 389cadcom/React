import React, { Component } from 'react'

/**
 * React代码分割 react-loadable
 * @param {*} importComponent
 */
function AsyncComponent(importComponent){
  return class extends Component {
    state = {
      component: null
    }
    componentDidMount() {
      importComponent().then((cmp) => {
        //console.log(cmp.default);
        this.setState({ component: cmp.default })
      })
    }
    //异步方式
    async componentDidMount () {
      //TODO 解构赋值是扩展形式的简写
      //先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者 { foo: baz } = { foo: 'aaa', bar: 'bbb' };
      const { default: component } = await importComponent()

      this.setState({
        component: component
      })
    }
    render() {
      var Component = this.state.component
      return Component ? <Component {...this.props} /> : null
    }
  }
}
export default AsyncComponent;
