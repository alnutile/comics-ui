<template>
  <ul class="list-unstyled align-left">
    <li v-for="creator in creators" :key="creator.id">
      <button @click="addCreatorToFilter(creator)">
        {{ creator.name }} {{ creator.role }}
      </button>
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
      this.creatorAdd(creatorId);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
