import React, { Component } from 'react'
import { TabBar, Tabs, Badge } from 'antd-mobile'

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

export default class View extends Component {
  tabChange = (tab, index) => {
    console.log(tab, index)
  }

  render() {
    return (
      <div style={{ height: 500 }}>
      <Tabs tabs={tabs} useOnPan={false}
        renderTab = { tab => <span>{tab.title}</span>}
        /* renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />} */
        tabBarUnderlineStyle={{ }}
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
      </div>
    )
  }
}
