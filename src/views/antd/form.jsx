import React, { Component } from 'react'
import { Checkbox, Radio, List, InputItem, Icon } from 'antd-mobile'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem
const RadioItem = Radio.RadioItem

const changeHandler = (params) => {
  console.log(params);
}

const data = [
  { value: 0, label: 'A.' },
  { value: 1, label: 'B' },
];
export default class extends Component {

  render() {
    return (
      <div className="form">
        {
          data.map( (item, i) => (
            <CheckboxItem key={i} onChange = { () => changeHandler(item.value) } > {item.label} </CheckboxItem>
          ))
        }
        <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
          Agree <a onClick={(e) => { e.preventDefault();  }}>agreement</a>
        </AgreeItem>

        <List>
          <List.Item> item </List.Item>
          <InputItem
            ref={el => this.inputRef = el}
            updatePlaceholder={true}
            extra= {<Icon type="right" />} clear defaultValue='10'>请输入</InputItem>
        </List>

      </div>
    )
  }
}
