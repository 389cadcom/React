import React, { useState } from 'react'
import { Checkbox, Radio } from 'antd-mobile'

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
export default function() {
  const [value, setValue]= useState(0)

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

      {
        data.map( (item, i) => (
          <RadioItem name="radio" checked={value === item.value} onChange={ () => setValue(item.value) } key={i}>{item.label}</RadioItem>
        ))
      }
    </div>
  )
}
