import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TransactionsIndex from '@/components/transactions/TransactionsIndex'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/transactions',
      name: 'TransactionsIndex',
      component: TransactionsIndex
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
