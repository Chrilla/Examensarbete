import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from "firebase/app"
import "@firebase/auth"
import { firestorePlugin } from 'vuefire'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(firestorePlugin)
Vue.use(axios)
Vue.use(infiniteScroll)

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
    if(!app) {
        app = new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app')
    }
})
