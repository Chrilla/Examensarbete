import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FullTable from '../views/FullTable.vue'
import Secret from '../views/Secret.vue'

import firebase from "firebase/app"
import "@firebase/auth"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: FullTable,
  },
  {
    path: '/secret',
    name: 'secret',
    component: Secret,
    meta: {requiresAuth: true}
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next("/login");
  } else {
    next();
  }
})

export default router
