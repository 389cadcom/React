import React, { Component } from 'react'
import { List, Picker, WhiteSpace, ImagePicker, PickerView, DatePicker } from 'antd-mobile'

var data = [
  {
    label: '春',
    value: '春',
  },
  {
    label: '夏',
    value: '夏',
  },
]
const files = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

export default class picker extends Component {
  state = {
    files,
    date: new Date()
  }
  onChange = (files, type, index) => {
    console.log(type, index);
    this.setState({files: files})
  }

  render() {
    const { files } = this.state;
    return (
      <div>
        <Picker title="季节" cols={1} extra="可选" data = { data }>
          <List.Item arrow="horizontal">Single</List.Item>
        </Picker>
        <WhiteSpace/>
        <ImagePicker
          files={files}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          onChange={this.onChange}
          accept="image/gif,image/jpeg,image/jpg,image/png"
          onAddImageClick = {() => {}}
        />
        <WhiteSpace/>
        <DatePicker
          mode="date"
          title="日期"
          extra="请选择"
          // value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
      </div>
    )
  }
}
