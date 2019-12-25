import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ListView, Icon, PullToRefresh, WhiteSpace } from 'antd-mobile'
import './list.scss'

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '需要风吹日晒需要风吹日晒需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '都需要风吹日晒1',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '都需要风吹日晒2',
  },
]
let index = data.length - 1;

const nums = 10;
let pageIndex = 1
function genData(pIndex = 0) {
  const arr = [];
  for (let i = 0; i < nums; i++) {
    arr.push(`row - ${(pIndex * nums) + i}`);
  }
  return arr;
}

export default class viewlist extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      hasMore: true
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 500);
  }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });

    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
        hasMore: true
      });
    }, 600);
  }

  onEndReached = (event) => {
    console.log('reach end', event);

    //已加载全部
    if(this.rData.length >= 30){
      this.setState({
        hasMore: false,
        isLoading: true
      })
    }

    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }

    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(pageIndex++)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1500);
  }
  //渲染行数据-- 使用data数据
  renderRow = (rowData, secID, rowID) => {
    if (index < 0) {
      index = data.length - 1;
    }
    const obj = data[index--];
    return (
      <div key={rowID} className="panel">
        <div className="panel_hd"> {obj.title} </div>
        <div className="panel_bd">
          <img className="media_hd" src={obj.img} alt="" />
          <div className="media_bd">
            <div className='media_title ellipsis'>
              <span style={{ color: '#FF6E27' }}>{rowID}</span> 元 {secID}
            </div>
            <div className="media_desc">
              {obj.des}-{rowData} {obj.des}-{rowData} {obj.des}-{rowData}
            </div>
          </div>
        </div>
      </div>
    )
  }

  /**
   * PullToRefresh: direction, refreshing, onRefresh
   *
   * ref, style.height
   * dataSource, pageSize, pullToRefresh, onEndReached
   * renderHeader, renderFooter, renderRow,
   *
   * rData = [...this.rData, ...((await this.getData()).sceneryinfo)];
   */
  render() {
    let {hasMore, refreshing, height, dataSource} = this.state;
    return (
      <ListView
        ref={el => this.lv = el}
        style={{
          height: height,
          maxWidth: '100%',
          border: '1px solid #ddd',
          margin: '5px 0',
        }}
        pageSize={5}
        dataSource={dataSource}

        renderHeader={() => <span>刷新 -- 加载</span>}
        renderFooter={() => (<div style={{ padding: 20, textAlign: 'center' }}> { hasMore ? 'Loading...' : '已加载全部数据'} </div>)}
        renderSeparator = {(sectionID, rowID)=> <WhiteSpace key={rowID} style={{backgroundColor:'#f0f0f0'}}/>}
        renderRow={ this.renderRow }

        pullToRefresh={<PullToRefresh
          indicator = {{activate: '下拉刷新'}}
          refreshing={ refreshing }
          onRefresh={this.onRefresh}
        />}
        onEndReached={this.onEndReached}
      />
    )
  }
}




//PullToRefresh
class pulltorefresh extends Component {
  state = {
    height: document.documentElement.clientHeight,
    down: true,
    refresh: false,
    list: genData(),
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
