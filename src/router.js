import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index'
import SysLog from './views/system/sys-log';
import EditTable from './views/table/edit-table';
import Test from './views/test/test.vue'
import Preview from './views/preview';
import Date from './views/Date/Date'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'log',
          component: SysLog
        },
        {
          path: 'edit-table',
          component: EditTable
        },
        {
          path: 'test',
          component: Test
        },
        {
          path: 'preview',
          component: Preview
        },
        {
          path: 'date',
          component: Date,
        }
      ]

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
