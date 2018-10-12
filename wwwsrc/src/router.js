import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Login from './views/Login.vue'
// @ts-ignore
import VaultKeep from './views/VaultKeep.vue';

// @ts-ignore
import AllKeeps from './views/AllKeeps.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/vaultkeep/:vaultId',
      name: 'vaultkeep',
      component: VaultKeep,
      props: true
    },
    {
      path: '/allkeeps',
      name: 'allkeeps',
      component: AllKeeps,
      props: true
    }
  ]
})
