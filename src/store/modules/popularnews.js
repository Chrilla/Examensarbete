import { db } from '../../firebase';

export default {
    
  state: {
      popularNews: [],
      newsArticle: null
  },

  mutations: {
      SET_POPULARNEWS(state, items) {
          state.popularNews = items
      },

      SET_NEWSARTICLE(state, item) {
          state.newsArticle = item
      },
  },

  actions: {
      getPopularnews({ commit }) {
          db.collection('popularnews').get().then(res => {
              let items = [];
              res.forEach(doc => {
                  const data = {
                      newsArticle: doc.data()
                  }
                  items.push(data)
              });
              commit('SET_POPULARNEWS', items)
          })
        },
      },

  getters: {
      popularNews(state) {
          return state.popularNews
      },
      newsArticle(state) {
          return state.newsArticle
      }
  }
}