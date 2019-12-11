import React, { Component } from 'react'
import { List, Checkbox, InputItem, Range, Stepper } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
const data = [
  { value: 0, label: 'A.' },
  { value: 1, label: 'B' },
]
export default class demo2 extends Component {
  render() {
    return (
      <div>
        {/* data.map( (item, i) => (
            <Radio.RadioItem key={i} > {item.label} </Radio.RadioItem>
          )) */}
        <List renderHeader={() => 'List Header'}>
          <Item extra="arrow function" wrap="true" arrow="horizontal" align="top">
            In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
          </Item>
          <InputItem type='text'>请输入</InputItem>
          <Item>
            <div style={{padding:5}}>
              <Range defaultValue={[20, 80]} />
            </div>
          </Item>
          <Item extra={<Stepper style={{ width: '100%', minWidth: '50px' }} showNumber size="samll" defaultValue={20} />}>
            Number of Subscribers
          </Item>
          <Item>
            <select defaultValue="1">
              <option value="1">Html select element</option>
              <option value="2" disabled>Unable to select</option>
              <option value="3">option 3</option>
            </select>
          </Item>
        </List>
      </div>
    )
  }
}
