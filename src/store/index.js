import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_results: {
      results: []
    },
    searching: false,
    search_term: null,
    search_state: false,
  },
  getters: {
    searching: (state) => {
      return state.searching;
    },
    searchState: (state) =>  {
      return state.search_term != null && state.search_term.length > 3
        ? true
        : false;
    }
  },
  mutations: {
    searching(state, trueOrFalse) {
      state.searching = trueOrFalse
    },
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
