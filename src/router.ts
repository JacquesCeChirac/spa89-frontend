import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    { path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "about" */ './views/404.vue') },
    { path: '*',
      redirect: '/404' },
    {
      path: '/actualites',
      name: 'actualites',
      component: () => import(/* webpackChunkName: "actualites" */ './views/Actualites.vue'),
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: () => import(/* webpackChunkName: "presentation" */ './views/Presentation.vue'),
    }
  ],
})
