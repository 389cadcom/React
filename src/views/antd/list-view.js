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

var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sectionIds = ['page1'];
let rowIds = [];

export default class View extends Component {
  //下拉刷新
  onRefresh = () => {
    this.setState({ refreshing: true })
    setTimeout(() => {
      this.setState({
        refreshing: false,
        list: {
          ...this.state.list,
          pageNum: 1,
          rows
        }
      })
    }, 800)
  }
  //上拉加载
  onEndReached = (page, lastPage) => {
    if(this.state.loading) return;

    if ( page < lastPage ) {
      this.setState({ loading: true })

      setTimeout(() => {
        var datas = this.state.list.rows.concat();
        var num = this.state.list.pageNum + 1
        var len = datas.length;

        sectionIds.push('page' + num)
        for(var i=1; i<= 10; i++){
          datas.push(len+i)
        }

        this.setState((state, props) => ({
          loading: false,
          list: {...state.list, pageNum: num, rows: datas }
        }))
      }, 800)
    }else{
      this.setState({ loading: false })
    }
  }
  //获取item重新进行展示
  renderRow = (item, i) => {
    return <div style={{padding: '20px 10px'}}>{item} --每个item</div>
  }
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.state = {
      dataSource: ds,
      list: {
        limit: 10,
        pageSize: 10,
        pageNum: 1,
        totalPage: 4,
        rows: rows
      },
      loading: false,
      refreshing: false,
    }
  }
  componentDidMount() {
    // cloneWithRows(list.rows)
    // cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs)

    const height = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    this.setState((state, props) => ({
      height: height
    }))
  }

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { list, dataSource, loading, refreshing } = this.state;
    const separator = (sectionID, rowID) => {
      return (<WhiteSpace style={{backgroundColor: '#F5F5F9'}} key={rowID} size="md"/>)
    }
    const locale = {
      prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
      nextText: (<span className="arrow-align"><Icon type="right" />下一步</span>),
    };

    //Popover-item select
    const onSelect = (opt) => {
      // console.log(opt.props.value);
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
        <NavBar mode="light"
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

        <WhiteSpace size="md"/>
        <Pagination total={5} current={1} locale={locale} />

        {list && list.rows && list.rows.length ? (
          <ListView ref={el => this.lv = el}
            dataSource={ dataSource.cloneWithRows(list.rows) }
            initialListSize={10}
            // pageSize={4}
            // useBodyScroll={true}
            style={{ height: this.state.height, overflow: 'auto', }}

            //下拉刷新
            pullToRefresh={
              <PullToRefresh refreshing={ refreshing } onRefresh={ this.onRefresh } />
            }
            //上拉加载
            onEndReached={() => this.onEndReached(list.pageNum, list.totalPage)}
            scrollRenderAheadDistance={500}
            onEndReachedThreshold={10}

            renderSeparator={ separator }
            renderSectionHeader={sectionData => {
              return (
                <div>{`Task ${sectionData[0]}`}</div>
              )
           }}
            renderRow={(rowData, id1, i) => this.renderRow(rowData, i)}
            renderFooter={() => (
              <div style={{ padding: 10, textAlign: 'center' }}>
                {list.pageNum < list.totalPage && loading ? <Icon type='loading' /> : '已加载全部数据'}
              </div>
            )}
          />
        ) : list && list.rows && !list.rows.length ? (
          <div className='goodEntry'>
            <p>暂无数据</p>
          </div>
        ) : null}
      </div>
    )
  }
}
