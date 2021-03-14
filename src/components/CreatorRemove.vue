<template>
  <ul class="list-unstyled align-left">
    <li v-for="creator in creators" :key="creator.id">
      <b-button
        variant="link"
        class="mb-1"
        @click="addCreatorToFilter(creator)"
      >
        {{ creator.name }} {{ creator.role }}
      </b-button>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["creators"],
  methods: {
    ...mapMutations(["creatorAdd"]),
    addCreatorToFilter(creator) {
      let resourceURI = creator["resourceURI"];
      let creatorId = resourceURI.split("/").slice(-1).pop();
      this.creatorAdd({
        id: creatorId,
        firstName: creator.name,
        role: creator.role,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
