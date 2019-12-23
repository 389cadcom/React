import React, { Component } from 'react'

import { Icon, Grid, Carousel, Button, Card, WingBlank, Accordion, List, WhiteSpace, Badge, Tag, Steps, NoticeBar } from 'antd-mobile'
const Step = Steps.Step;

let list = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'loading', 'search'
]
const customIcon = (num) => {
  console.log(num);
  return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
    <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
      <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
      <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
    </g>
  </svg>
)}


export default class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 3,
      data: [{color: 'red', text: 1}, {color: 'blue', text: 2}, {color: 'green', text: 3}, ]
    }
  }
  addHandler = () => {
    this.setState({
      count: this.state.count+1
    }, ()=>{
      //setState() 是异步操作，想立即获取修改后的state, 要在回调函数中获取
      this.setState((state, props) => {
        return {
          data: [...state.data, {color: 'orange', text: state.count}]
        }
      })
    })
  }

  render() {
    var icons = list.map((item, i)=>({
      icon: (<Icon type={item} />),
      text: item
    }))
    return (
      <WingBlank size="md">
        <NoticeBar mode="closable" marqueeProps={{loop: true}}>
          Notice: 在导航栏下方，一般用作系统提醒、活动提醒等通知,在导航栏下方，一般用作系统提醒、活动提醒等通知,.
        </NoticeBar>
        <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
          Notice:
        </NoticeBar>
        <div>
          <Button inline size="small" onClick = { this.addHandler } type="primary">添加</Button>
          <Steps size="small" current={1} direction="horizontal">
            {
              [1, 2, 3].map( item => <Step key={item} title={item} />)
            }
          </Steps>
          <Steps current={1}>
            {
              [1, 2, 3, 4].map( item => <Step key={item} title={item} icon={customIcon(item)}/>)
            }
          </Steps>

          <WhiteSpace />
          <List>
            <List.Item extra={<Tag>tag</Tag>} arrow="horizontal">
              <Badge dot> Badge </Badge>
            </List.Item>
            <List.Item extra={<Badge text={77} overflowCount={55} />} arrow="horizontal">
              <Badge>
                <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
              </Badge>
            </List.Item>
            <List.Item>
              <Badge text={'促'} corner>
                <div className="corner-badge">Use corner prop</div>
              </Badge>
            </List.Item>
            <List.Item className="special-badge" extra={<Badge text={'促'} />}>
              Custom
            </List.Item>
            <List.Item extra={<Badge text={'促'} />}>
              <Badge text="减" hot style={{ marginLeft: 12, backgroundColor:'orange' }} />
              <Badge text="惠" hot style={{ marginLeft: 12, backgroundColor:'pink' }} />
              <Badge text="免" hot style={{ marginLeft: 12 }} />
              <Badge text="反" hot style={{ marginLeft: 12 }} />
            </List.Item>
          </List>
        </div>
        <WhiteSpace/>
        <Carousel autoplay infinite
          // frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
        >
          {
            this.state.data.map( (item, i) => (
              <div style={{height: '160px', color:'white', backgroundColor: item.color}} key={i}>{item.text}</div>
            ))
          }
        </Carousel>

        <Card full>
          <Card.Header title="header" extra="tips"></Card.Header>
          <Card.Body>Body</Card.Body>
          <Card.Footer content="footer"></Card.Footer>
        </Card>
        <WhiteSpace/>
        <Accordion accordion>
          <Accordion.Panel header="title1">
            <List>
              <List.Item extra='tips'>title1-1</List.Item>
              <List.Item extra='tips'>title1-2</List.Item>
              <List.Item extra='tips'>title1-3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="title2">
            <div className="content" style={{padding:'10px'}}>accordion.panel2</div>
          </Accordion.Panel>
          <Accordion.Panel header="title3" className="pad">
            <div className="content" style={{padding:'10px'}}>accordion.panel3</div>
          </Accordion.Panel>
        </Accordion>

        <WhiteSpace/>
        <Grid data={icons} columnNum={4} activeStyle={false} isCarousel itemStyle={{backgroundColor: '#eee'}} />
      </WingBlank>
    )
  }
}
