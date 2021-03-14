<template>
  <b-row align-h="center">
    <p v-if="this.$store.state.search_results.results.length == 0">
      Nothing found
    </p>
    <comic-card
      v-else
      :item="item"
      v-for="item in this.$store.state.search_results.results"
      :key="item.id"
    >
    </comic-card>
  </b-row>
</template>

<script>
import ComicCard from "./ComicCard.vue";
export default {
  components: { ComicCard },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
