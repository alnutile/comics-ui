import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    creators: [],
    search_results: {
      results: []
    },
    searching: false,
    search_term: null,
    search_state: false,
  },
  getters: {
    creators: (state) => {
      return state.creators;
    },
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
    creatorAdd(state, creatorId) {
      state.creators.push(creatorId)
    },
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
