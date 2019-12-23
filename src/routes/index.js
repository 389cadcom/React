import home from '../views/home'
import edit from '../views/edit'
import antd from '../views/antd'
import list from '../views/list'
import login from '../views/login'

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
    component: antd
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
