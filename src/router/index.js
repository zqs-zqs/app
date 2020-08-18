import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/index',
    component:Index
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
