import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ListView, Icon, PullToRefresh, WhiteSpace } from 'antd-mobile'

var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sectionIds = ['page1'];

export default class ViewList extends Component {
  constructor(props) {
    super(props)

    //数据源
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.state = {
      dataSource: ds,
      list: {
        currentPage: 1,
        totalPage: 4,
      },
      hasMore: true,
      loading: false,
      refresh: false,
    }
  }
  //上拉加载
  loadingHandler = (page, lastPage) => {
    if (this.state.loading && !this.state.hasMore) {
      return;
    }
    // this.rData = [...this.rData, ...((await this.genData()).sceneryinfo)];
    this.setState({ loading: true })
    setTimeout(() => {
      var datas = this.state.list.rows.concat();
      var page = this.state.list.currentPage + 1

      //TODO 头部标题
      // sectionIds.push('page' + num)
      var len = datas.length;
      for(var i=1; i<= 10; i++){
        datas.push(len+i)
      }
      this.setState((state, props) => ({
        loading: false,
        list: {...state.list, currentPage: page, rows: datas }
      }))

      //没有更多了
      if(page >= this.state.totalPage){
        this.setState({hasMore: false})
      }
    }, 800)
  }
  //下拉刷新
  onRefresh = () => {
    this.setState({ refresh: true })
    setTimeout(() => {
      this.setState({
        refresh: false,
      })
    }, 1500)
  }
  renderRow = (item, i) => {
    return <div style={{padding: '20px 10px'}}>item{ item}</div>
  }
  //TODO 初始没有数据--请注意条件判断DOM值, 三目运算
  componentDidMount() {
    let $el = ReactDOM.findDOMNode(this.lv)

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
    const { list, dataSource, loading, refresh, hasMore } = this.state
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
                { hasMore ? <Icon type='loading' /> : '已加载全部数据'}
              </div>
            )}

            onEndReached={ this.loadingHandler }
            onEndReachedThreshold={20}
            pullToRefresh={ <PullToRefresh refreshing={refresh} onRefresh={this.onRefresh} /> }
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