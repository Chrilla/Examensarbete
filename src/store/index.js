import Vue from 'vue'
import Vuex from 'vuex'
import smallnews from './modules/smallnews'
import popularnews from './modules/popularnews'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    smallnews,
    popularnews
  }
})
