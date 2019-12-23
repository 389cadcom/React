import React, { Component } from 'react'
import { List, Checkbox, Radio, InputItem, Range, Stepper, Icon, SwipeAction } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
const data = [
  { value: 0, label: 'A' },
  { value: 1, label: 'B' },
]
export default class demo2 extends Component {
  state = {
    value: 0,
  }

  render() {
    return (
      <div>
        {data.map((item, i) => (
          <Radio.RadioItem
            key={i}
            checked={this.state.value === item.value}
            onChange={() => this.setState({ value: item.value })}>
            {item.label}
          </Radio.RadioItem>
        ))}
        {/* List */}
        <List renderHeader={() => 'List Header'}>
          <SwipeAction style={{ backgroundColor: '#ddd' }}
            // autoClose
            right={[
              {
                text: '删除',
                onPress: () => console.log(this, 'delete'),
                style: { backgroundColor: '#F4333C', color: 'white' },
              },
            ]}
            left={[
              {
                text: '回复',
                onPress: () => console.log('reply'),
                style: { backgroundColor: '#108ee9', color: 'white' },
              },
            ]}
            onOpen={() => console.log('global open')}
            onClose={() => console.log('global close')}
          >
            <Item
              style={{ alignItems: 'flex-start' }}
              thumb={<Icon type='search' />}
              extra='arrow function'
              wrap
              arrow='down'
              align='top'>
              In rare cases, the text of right side will wrap in the single line with long text.
            </Item>
          </SwipeAction>
          <InputItem type='text'>请输入</InputItem>
          <Item>
            <div style={{ padding: 5 }}>
              <Range defaultValue={[20, 80]} />
            </div>
          </Item>
          <Item
            extra={<Stepper style={{ width: '100%', minWidth: '50px' }} showNumber size='samll' defaultValue={20} />}>
            Number of Subscribers
          </Item>
          <Item>
            <select defaultValue='1'>
              <option value='1'>Html select element</option>
              <option value='2' disabled>
                Unable to select
              </option>
              <option value='3'>option 3</option>
            </select>
          </Item>
        </List>
      </div>
    )
  }
}
