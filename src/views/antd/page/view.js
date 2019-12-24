import React, { Component } from 'react'
import { TabBar, Tabs, Badge, NavBar, Icon } from 'antd-mobile'

const tabs = [
  { title: "tab1" },
  { title: "tab2" },
  { title: "tab3" },
  { title: "tab4" },
  { title: "tab5" },
  { title: "tab6" },
  { title: "tab7" },
  // { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
];

const TabsView = () => (
  <Tabs tabs={tabs} useOnPan={false}
    renderTab = { tab => <span>{tab.title}</span>}
    /* renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />} */
    tabBarUnderlineStyle={{ borderBottomWidth: 0 }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '750px', backgroundColor: '#fff' }}>
      Content of first tab
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
      Content of second tab
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
      Content of third tab
    </div>
  </Tabs>
)


export default class View extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 'Home'
    }
  }

  tabChange = (tab, index) => {
    console.log(tab, index)
  }
  pressHandler = (e) => {
    this.setState({selectedTab: 'Home'})
  }


  render() {
    return (
      <div style={{ height: 'calc(100% - 101px)' }}>
        {/* <TabsView/> */}
        <TabBar
          unselectedTintColor="#333"
          tintColor="#33A3F4"
          barTintColor="white"
          // tabBarPosition="top"
        >
          <TabBar.Item title="Home" icon={<Icon type="search" />} selectedIcon={<Icon type="check-circle-o"/>}
            selected={this.state.selectedTab === 'Home' } onPress = { this.pressHandler }
          >
            内容1
          </TabBar.Item>
          <TabBar.Item title="Find" badge={1} icon={<Icon type="loading" />} selected={this.state.selectedTab === 'Find'} onPress={()=>{
            this.setState({selectedTab: 'Find'})
          }}>
            内容2
          </TabBar.Item>
          <TabBar.Item title="Me" dot icon={<Icon type="search" />}>
            内容3
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
