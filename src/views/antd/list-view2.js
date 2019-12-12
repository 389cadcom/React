import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ListView, Icon, PullToRefresh, WhiteSpace } from 'antd-mobile'

var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default class View extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: ds,
      list: {
        pageNum: 1,
        totalPage: 4,
      },
      upLoading: false,
      pullLoading: false,
    }
  }
  //上拉加载
  onEndReached = (page, lastPage) => {
    if (page < lastPage) {
      this.setState({ upLoading: true })
    }
  }
  //下拉刷新
  onRefresh = () => {
    this.setState({ pullLoading: true })
    setTimeout(() => {
      this.setState({
        pullLoading: false,
      })
    }, 1500)
  }
  renderRow = (item, i) => {
    return <div style={{padding: '20px 10px'}}>item{ item}</div>
  }
  //TODO 初始没有数据--请注意条件判断DOM值, 三目运算
  componentDidMount() {
    let $el = ReactDOM.findDOMNode(this.lv)
    // console.log($el);
    let height = document.documentElement.clientHeight - $el.parentNode.offsetTop;

    this.setState({
      height,
      list: {
        ...this.state.list,
        rows
      }
    })
  }
  render() {
    const { list, dataSource, upLoading, pullLoading } = this.state
    return (
      <div className="goodsDetail">
        {list && list.rows && list.rows.length ? (
          <ListView ref={ el => this.lv = el }
            dataSource={dataSource.cloneWithRows(list.rows)}
            initialListSize={10}
            // pageSize={10}
            // useBodyScroll={true}
            style={{ height: this.state.height, overflow: 'auto', }}

            renderSeparator = {(sectionID, rowID)=> <WhiteSpace key={rowID} style={{backgroundColor:'#f0f0f0'}}/>}
            renderRow={(rowData, id1, i) => this.renderRow(rowData, i)}
            renderFooter={() => (
              <div style={{ padding: 10, textAlign: 'center' }}>
                {list.pageNum < list.totalPage && upLoading ? <Icon type='loading' /> : '已加载全部数据'}
              </div>
            )}

            onEndReached={() => this.onEndReached(list.pageNum, list.totalPage)}
            onEndReachedThreshold={20}
            pullToRefresh={ <PullToRefresh refreshing={pullLoading} onRefresh={this.onRefresh} /> }
          />
        ) : list && list.rows && !list.rows.length ? (
          <div className="goodEntry" ref={ el => this.lv = el }>
            <p>暂无数据</p>
          </div>
        ) : <div ref={ el => this.lv = el }></div>}
      </div>
    )
  }
}
