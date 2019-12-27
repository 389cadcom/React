import React, { Component } from "react"

const mixin = function(target, mixins) {
  const newObj = target

  newObj.prototype = Object.create(target.prototype)

  for (let prop in mixins) {
    if (mixins.hasOwnProperty(prop)) {
      newObj.prototype[prop] = mixins[prop]
    }
  }

  return newObj
}

var o = mixin({}, {a: 'a'})


//connect, withRouter
//1.属性代理;
const MyContainer = (WrapComponent) => {
  return class Container extends Component {
    render() {
      return (
        <WrapComponent {...this.props} />
      )
    }
  }
}

const MyContainer = (WrapComponent) => {
  return class Container extends Component {
    render() {
      return (
        <WrapComponent {...this.props} />
      )
    }
  }
}
