import React from 'react'

import { Menu, ActivityIndicator, NavBar } from 'antd-mobile'

const data = [
  {
    value: '1',
    label: 'Food',
    children: [
      {
        label: 'All Foods',
        value: '1',
        disabled: false,
      },
      {
        label: 'Chinese Food',
        value: '2',
      },
      {
        label: 'Hot Pot',
        value: '3',
      },
      {
        label: 'Buffet',
        value: '4',
      },
      {
        label: 'Fast Food',
        value: '5',
      },
      {
        label: 'Snack',
        value: '6',
      },
      {
        label: 'Bread',
        value: '7',
      },
      {
        label: 'Fruit',
        value: '8',
      },
      {
        label: 'Noodle',
        value: '9',
      },
      {
        label: 'Leisure Food',
        value: '10',
      },
    ],
  },
  {
    value: '2',
    label: 'Super',
    children: [
      {
        label: 'All Supermarkets',
        value: '1',
      },
      {
        label: 'Supermarket',
        value: '2',
        disabled: true,
      },
      {
        label: 'C-Store',
        value: '3',
      },
      {
        label: 'Personal Care',
        value: '4',
      },
    ],
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
    children: [
      {
        label: 'you can not see',
        value: '1',
      },
    ],
  },
]

export default class MenuExample extends React.Component {
  state = {
    initData: '',
    show: false,
  }

  //选中项 value, label, isLeaf, children
  onChange = (value) => {
    let label = ''
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {                  //一级
        label = dataItem.label

        if (dataItem.children && value[1]) {              //二级
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += `: ${cItem.label}`
            }
          })
        }
      }
    })
    console.log(label)
  }
  // Fix event propagation on Android
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }
  onOk = (value) => {
    console.log(value);
  }
  onMaskClick = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    const { initData, show } = this.state
    const menuEl = (
      <Menu
        multiSelect
        // level={1}
        onOk = { this.onOk }
        onCancel = { this.onMaskClick }
        data={initData}
        value={['1', ['3', '4']]}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    )

    //loading
    const loadingEl = (
      <div
        style={{
          width: '100%',
          height: document.documentElement.clientHeight * 0.6,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size='large' />
      </div>
    )
    return (
      <div className={show ? 'menu-active' : ''}>
        <div>
          <NavBar
            leftContent='Menu'
            mode='dark'
            icon={
              <img src='https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg' style={{ width: 20 }} />
            }
            onLeftClick={this.handleClick}
            className='top-nav-bar'>
            Title
          </NavBar>
        </div>
        {show ? (initData ? menuEl : loadingEl) : null}
        {/* {show ? <div className='menu-mask' onClick={this.onMaskClick} /> : null} */}
      </div>
    )
  }
}
