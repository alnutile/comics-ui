import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Creators from '../views/Creators.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search by Comic Name',
    component: Home
  },
  {
    path: '/creators',
    name: 'Search By Creator name',
    component: Creators
  }
]

const router = new VueRouter({
  routes
})

export default router
