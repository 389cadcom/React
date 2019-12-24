import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ListView, Icon, PullToRefresh, WhiteSpace, Pagination, NavBar, Popover, List, Drawer } from 'antd-mobile'
import ListItem from 'antd-mobile/lib/list/ListItem';

/**
 * limit
 * currentPage
 * pageSize       每页显示行数
 *
 * totalSize      总条数
 * totalPage      总页数    Math.ceil(totalSize/pageSize)
 */
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;


export default class View extends Component {
  state = {
    visible: true
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

  render() {
    //Popover-item select
    const onSelect = (opt) => {
      this.setState({
        visible: false,
        selected: opt.props.value,
      });
    }
    const handleVisibleChange = (visible) => {
      this.setState({
        visible: visible,
      })
    }

    let Item = Popover.Item
    const popover = () => (
      <Popover mask overlay={[
          <Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>,
          <Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} >My Qrcode</Item>,
          <Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
            <span style={{ marginLeft: 5 }}>Help</span>
          </Item>,
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        visible = {this.state.visible}
        onVisibleChange={ handleVisibleChange }
        onSelect={ onSelect }
      >
        <Icon type="ellipsis"/>
      </Popover>
    )

    //Drawer
    const sidebar = () => (
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
          return <List.Item key={i} style={{width:300}}>{i}</List.Item>
        })}
      </List>
    )

    return (
      <div className='listview'>
        <NavBar
          icon={<Icon type="ellipsis"/>}
          onLeftClick={ this.onOpenChange }
          // rightContent={[<Icon type="search"/>, <Icon type="ellipsis"/>]}
          rightContent={ popover() }
        >Title</NavBar>
        <Drawer className="my-drawer"
          enableDragHandle
          style={{ minHeight: 400, top:150 }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={ sidebar() }
          open={this.state.open}
          onOpenChange={ this.onOpenChange }
        >
          Click upper-left corner
        </Drawer>

      </div>
    )
  }
}
