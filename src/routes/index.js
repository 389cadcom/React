// @babel/plugin-syntax-dynamic-import

// import AsyncComponent from '../components/AsyncComponent'
// const Home = AsyncComponent(() => import('../views/home'))

import home from '../views/home'
import edit from '../views/edit'
import antd from '../views/antd'
import list from '../views/list'
import login from '../views/login'

import ListView from '../views/antd/page/list-view'
import AntList from '../views/antd/page/list'
import Form from '../views/antd/page/form'

const routes = [
  {
    path: '/',
    exact: true,
    component: home
  },
  {
    path: '/edit',
    exact: false,
    component: edit
  },
  {
    path: '/antd',
    exact: false,
    component: antd,
    children: [
      {
        path: '/antd/',
        exact: true,
        component: ListView
      },
      {
        path: '/antd/list',
        component: AntList
      },
      {
        path: '/antd/form',
        component: Form
      }
    ]
  },
  {
    path: '/list',
    exact: false,
    component: list
  },
  {
    path: '/login',
    exact: false,
    component: login
  },
]

export default routes
