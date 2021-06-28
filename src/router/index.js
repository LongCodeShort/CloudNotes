import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index'
import Note from '../views/note'
import Page404 from '../components/error/404'
import { getChildRoutes } from '../data/catalog'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:note',
    name: 'Node',
    component: Note,
    props: true,
    children: getChildRoutes()
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Page404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
