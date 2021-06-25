import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index'
import Article from '../views/note'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/-',
    name: 'Node',
    component: Article
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
