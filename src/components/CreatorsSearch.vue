<template>
  <section>
    <b-input-group size="lg" class="mb-3">
      <b-form-input
        debounce="500"
        autofocus
        :state="searchState"
        @input="searchTerm"
        @update="searchApi"
        id="search-form"
        placeholder="Enter Name of Creator"
      ></b-form-input>
      <b-input-group-append>
        <b-button size="sm" text="Button" variant="dark" @click="searchApi"
          >Search</b-button
        >
      </b-input-group-append>
    </b-input-group>
    <b-form-text id="earch-form-help"
      >Please enter 3 or more letters to trigger the search</b-form-text
    >
    <spinner v-if="searching"></spinner>
    <b-row align-h="center">
      <p v-if="this.$store.state.search_results.results.length == 0">
        Nothing found
      </p>
      <creator-card
        v-else
        :creator="item"
        v-for="item in this.$store.state.search_results.results"
        :key="item.id"
      ></creator-card>
    </b-row>
  </section>
</template>

<script>
import Spinner from "./Spinner.vue";
import { mapMutations, mapState, mapGetters } from "vuex";
import CreatorCard from "./CreatorCard.vue";
export default {
  name: "CreatorsSearch",
  components: {
    Spinner,
    CreatorCard,
  },
  computed: {
    ...mapState(["search_term", "search_state"]),
    ...mapGetters([
      "searchState",
      {
        storeSearching: "searching",
      },
    ]),
    searching: {
      get() {
        return this.storeSearching;
      },
      set(newState) {
        return newState;
      },
    },
  },
  methods: {
    ...mapMutations(["searchTerm", "searching"]),
    searchApi() {
      if (this.searchState) {
        this.$store.commit("searching", true);
        this.$bvToast.toast(`Making query for ${this.search_term}`, {
          title: "Working on things...",
          autoHideDelay: 2000,
          variant: "success",
          appendToast: true,
        });
        this.axios
          .get(`http://gateway.marvel.com/v1/public/creators`, {
            params: {
              nameStartsWith: this.search_term,
              apikey: process.env.VUE_APP_MARVEL_PUBLIC,
            },
          })
          .then((response) => {
            this.$store.commit("searchResults", response.data.data);
            this.$store.commit("searching", false);
            console.log(response.data.data);
          })
          .catch((error) => {
            this.$bvToast.toast("Sorry Error with the query", {
              title: "Error:",
              autoHideDelay: 2000,
              variant: "warning",
              appendToast: true,
            });
            this.$store.commit("searching", false);
            console.log(error);
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
