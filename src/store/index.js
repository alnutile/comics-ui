import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_results: {}
  },
  mutations: {
    searchResults(state, results) {
      state.search_results = results
    }
  },
  actions: {
  },
  modules: {
  }
})
