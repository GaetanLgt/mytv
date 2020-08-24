import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Episodes from '../views/Episodes.vue'
import Casting from '../views/Casting.vue'
import Carrer from '../views/Carrer.vue'
import Show from '../views/Show.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: Show
  },
  
  {
    path: '/episodes/:id',
    name: 'Episodes',
    component: Episodes
  },

  {
    path: '/casting/:id',
    name: 'Casting',
    component: Casting
  },
  {
    path: '/carrer/:id',
    name: 'Carrer',
    component: Carrer
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
