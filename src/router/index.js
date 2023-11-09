import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetailsView from '../views/jobs/JobDetailsView.vue'
import NotFound from '../views/NotFound.vue'
import InfoView from '../views/InfoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "InfoView" */ '../views/InfoView.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/jobs/JobsView.vue'),
    props: true
  },
  //CatchAll 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    props: true
  },

  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/jobs/JobDetailsView.vue')

  },

  {
    path: '/JOBS/:title',
    name: 'JobDetails',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/jobs/JobDetailsView.vue')
  },

  {
    path: '/jobs/engineer',
    redirect: '/jobs'
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
