import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Experience from '../components/Experience'
import Beautiful from '../components/Beautiful'
import Sincerity from '../components/Sincerity'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/Index' },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/Beautiful',
      name: 'Beautiful',
      component: Beautiful
    },
    {
      path: '/Sincerity',
      name: 'Sincerity',
      component: Sincerity
    }
  ]
})
