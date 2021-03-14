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
        placeholder="Enter Part of Comic Name"
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
    <comic-list></comic-list>
  </section>
</template>

<script>
import ComicList from "./ComicList.vue";
import Spinner from "./Spinner.vue";
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "ComicsSearch",
  components: {
    ComicList,
    Spinner,
  },
  data() {
    return {
      searching: false,
    };
  },
  computed: {
    ...mapState(["search_term", "search_state"]),
    ...mapGetters(["searchState"]),
  },
  methods: {
    ...mapMutations(["searchTerm"]),
    searchApi() {
      if (this.searchState) {
        this.searching = true;
        this.$bvToast.toast(`Making query for ${this.search_term}`, {
          title: "Working on things...",
          autoHideDelay: 2000,
          variant: "success",
          appendToast: true,
        });
        this.axios
          .get(`http://gateway.marvel.com/v1/public/comics`, {
            params: {
              titleStartsWith: this.search_term,
              apikey: process.env.VUE_APP_MARVEL_PUBLIC,
            },
          })
          .then((response) => {
            this.$store.commit("searchResults", response.data.data);
            this.searching = false;
            console.log(response.data.data);
          })
          .catch((error) => {
            this.$bvToast.toast("Sorry Error with the query", {
              title: "Error:",
              autoHideDelay: 2000,
              variant: "warning",
              appendToast: true,
            });
            console.log(error);
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
