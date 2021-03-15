<template>
  <section>
    <b-input-group size="lg" class="mb-3">
      <b-form-tags v-model="value" no-outer-focus class="mb-2">
        <template v-slot="{ tags, inputAttrs, inputHandlers, tagVariant }">
          <b-input-group class="mb-2">
            <b-form-input
              @input="tagChanged"
              v-bind="inputAttrs"
              autofocus
              v-on="inputHandlers"
              placeholder="Start by searching for comics by entering title"
              class="form-control"
            ></b-form-input>
            <b-input-group-append>
              <b-button @click="addTag()" variant="primary">Search</b-button>
            </b-input-group-append>
          </b-input-group>
          <div class="d-inline-block" style="font-size: 1.5rem">
            <b-form-tag
              v-for="tag in tags"
              @remove="removeTag(tag)"
              :key="tag"
              :title="tag"
              :variant="tagVariant"
              class="mr-1"
              >{{ tag }}</b-form-tag
            >
          </div>
        </template>
      </b-form-tags>
    </b-input-group>
    {{ value }}

    <b-form-text id="earch-form-help"
      >Please enter 3 or more letters to trigger the search</b-form-text
    >
    {{ creators }}
    <spinner v-if="searching"></spinner>
    <b-row align-h="center">
      <p v-if="this.$store.state.search_results.results.length == 0">
        Nothing found
      </p>
      <comic-card
        v-else
        :item="item"
        v-for="item in this.$store.state.search_results.results"
        :key="item.id"
      ></comic-card>
      {{ this.$store.state.search_results.results }}
    </b-row>
  </section>
</template>

<script>
import Spinner from "./Spinner.vue";
import { mapMutations, mapState, mapGetters } from "vuex";
import ComicCard from "./ComicCard.vue";
export default {
  name: "ComicsSearch",
  components: {
    Spinner,
    ComicCard,
  },
  data() {
    return {
      value: [],
      queryArray: [],
    };
  },
  watch: {
    search_term(newValue, oldValue) {
      this.searchApi();
    },
    creatorIds(newValue, oldValue) {
      let creatorName = this.creatorFromId(newValue.slice(-1).pop());
      this.value.push(creatorName.name);
      this.searchApi();
    },
  },
  computed: {
    ...mapState(["search_term", "search_state", "creators"]),
    ...mapGetters([
      "creatorFromId",
      "creatorIds",
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
    addTag(tag) {
      console.log("tag to add", tag);
    },
    removeTag(tagToRemove) {
      console.log("tag to remove", tagToRemove);
    },
    tagChanged(content) {
      this.$store.commit("searchTerm", content);
    },
    searchApi() {
      if (this.searchState) {
        this.$store.commit("searching", true);
        this.$bvToast.toast(`Making query for ${this.search_term}`, {
          title: "Working on things...",
          autoHideDelay: 2000,
          variant: "success",
          appendToast: true,
        });

        let params = {
          titleStartsWith: this.search_term,
          apikey: process.env.VUE_APP_MARVEL_PUBLIC,
        };

        if (this.creatorIds.length > 0) {
          params["creators"] = this.creatorIds.join();
        }

        this.axios
          .get(`http://gateway.marvel.com/v1/public/comics`, {
            params: params,
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
