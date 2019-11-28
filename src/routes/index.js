import home from '../views/home'
import edit from '../views/edit'

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
]

export default routes