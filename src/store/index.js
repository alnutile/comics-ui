import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_results: {
      results: []
    },
    search_term: null,
    search_state: false,
  },
  getters: {
    searchState: (state) =>  {
      return state.search_term != null && state.search_term.length > 3
        ? true
        : false;
    }
  },
  mutations: {
    searchTerm(state, searchTerm) {
      console.log("searchTerm state", searchTerm)
      state.search_term = searchTerm
    },
    searchResults(state, results) {
      state.search_results = results
    }
  },
  actions: {
  },
  modules: {
  }
})
