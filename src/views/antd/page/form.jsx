import React, { Component } from 'react'
import { Checkbox, Radio, List, InputItem, Icon, Switch, Slider, WhiteSpace, Stepper, SearchBar, TextareaItem, Range } from 'antd-mobile'

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
  state = {
    checked: false
  }
  componentDidMount() {
    this.autoSearch.focus()
  }

  render() {
    return (
      <div className="form">
        <WhiteSpace/>
        <SearchBar ref={el => this.autoSearch = el} placeholder='搜一搜' showCancelButton></SearchBar>
        {
          data.map( (item, i) => (
            <CheckboxItem key={i} onChange = { () => changeHandler(item.value) } > {item.label} </CheckboxItem>
          ))
        }
        <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
          Agree agreement
        </AgreeItem>

        <List>
          <List.Item> item </List.Item>
          <InputItem
            ref={el => this.inputRef = el}
            extra= {<Icon type="right" />} clear defaultValue='10'>请输入</InputItem>
          <List.Item
            extra={
            <Switch color="red" platform='android' checked={this.state.checked}
              onChange={()=>this.setState({checked:!this.state.checked})}></Switch>
          }>
            off
          </List.Item>
          <List.Item extra = {
            <Stepper
              style={{ width: '100%', minWidth: '50px' }}
              showNumber
              max={10}
              min={1}
              value={5}
            />}>
            Steper
          </List.Item>
        </List>
        <WhiteSpace/>
        <Slider defaultValue={10} handleStyle={{height: '15px', width:'15px',marginTop: '-7px',}} />
        <WhiteSpace size="lg"/>
        <Range
          handleStyle={[{height: '15px', width:'15px',marginTop: '-7px'}, {height: '15px', width:'15px',marginTop: '-7px',}]}
          min={0}
          max={20}
          defaultValue={[3, 10]}
        />

        <WhiteSpace size="lg"/>
        <List renderHeader={() => 'Count'}>
          <TextareaItem title="文本域" clear placeholder='内容' rows={2} count={10}></TextareaItem>
        </List>
      </div>
    )
  }
}
