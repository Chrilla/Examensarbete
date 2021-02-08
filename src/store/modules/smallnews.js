import { db } from '../../firebase';

export default {
    
  state: {
      smallNews: [],
      newsPost: null
  },

  mutations: {
      SET_SMALLNEWS(state, items) {
          state.smallNews = items
      },

      SET_NEWSPOST(state, item) {
          state.newsPost = item
      },
  },

  actions: {
      getSmallnews({ commit }) {
          db.collection('smallnews').get().then(res => {
              let items = [];
              res.forEach(doc => {
                  const data = {
                      newsPost: doc.data()
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
      newsPost(state) {
          return state.newsPost
      }
  }
}