import { db } from '../../firebase';

export default {
    
  state: {
      smallNews: [],
      smallnew: null
  },

  mutations: {
      SET_SMALLNEWS(state, items) {
          state.smallNews = items
      },

      SET_SMALLNEW(state, item) {
          state.smallnew = item
      },
  },

  actions: {
      getSmallnews({ commit }) {
          db.collection('smallnews').get().then(res => {
              let items = [];
              res.forEach(doc => {
                  const data = {
                      smallnew: doc.data()
                  }
                  items.push(data)
              });
              commit('SET_SMALLNEWS', items)
          })
        },
      },

  getters: {
      smallNews(state) {
          return state.smallNews
      },
      smallNew(state) {
          return state.smallnew
      }
  }
}