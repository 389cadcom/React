import home from '../views/home'
import edit from '../views/edit'
import antd from '../views/antd'

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
]

export default routes
