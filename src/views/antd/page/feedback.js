import ReactDOM from 'react-dom'
import React, { Component } from 'react'

import { PullToRefresh } from 'antd-mobile'

function getData() {
  const dataArr = []
  for (let i = 0; i < 20; i++) {
    dataArr.push(i)
  }
  return dataArr
}

export default class feedback extends Component {
  state = {
    height: document.documentElement.clientHeight,
    down: true,
    refresh: false,
    list: getData(),
  }
  componentDidMount() {
    this.setState({
      height: this.state.height - ReactDOM.findDOMNode(this.elem).offsetTop,
    })
  }

  refreshHandler = () => {
    this.setState({ refresh: true })
    setTimeout(() => {
      this.setState({ refresh: false })
    }, 2500)
  }

  render() {
    let { height, refresh, list, down } = this.state
    let indicator = { activate: down ? '下拉刷新' : '上拉加载...', finish: ' ', deactivate: '已加载全部数据' }

    return (
      <PullToRefresh
        ref={(el) => (this.elem = el)}
        style={{ height: height, overflow: 'auto' }}
        direction={down ? 'down' : 'up'}
        indicator={indicator}
        refreshing={refresh}
        onRefresh={this.refreshHandler}>
        {list.map((i) => (
          <div key={i} style={{ padding: 20 }}>
            {down ? '下拉刷新' : '上拉加载'} {i}
          </div>
        ))}
      </PullToRefresh>
    )
  }
}
