import React, { Component } from 'react'

/**
 * React代码分割 react-loadable
 * @param {*} importComponent
 */
function AsyncComponent(importComponent) {
  return class HOC extends Component {
    state = {
      component: null,
    }
    componentDidMount() {
      //console.log(cmp.default);
      importComponent().then((cmp) => {
        this.setState({ component: cmp.default })
      })
    }
    //TODO 解构赋值是扩展形式的简写
    //先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者 { foo: baz } = { foo: 'aaa', bar: 'bbb' };
    async componentDidMount() {
      const { default: component } = await importComponent()

      this.setState({ component })
    }
    render() {
      var Component = this.state.component
      return Component ? <Component {...this.props} /> : null
    }
  }
}
export default AsyncComponent
