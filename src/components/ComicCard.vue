<template>
  <b-card no-body style="width: 30rem" class="m-1 overflow-hidden">
    <b-row no-gutters>
      <b-col md="4">
        <b-card-img
          :src="`${item.thumbnail.path}/portrait_uncanny.jpg`"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
      </b-col>
      <b-col md="8">
        <b-card-body :title="item.title" text-left>
          <b-card-text text-left>
            <creators-card :creators="item.creators.items"></creators-card>
          </b-card-text>
          <b-link :href="item.urls[0]['url']" target="_blank"
            >visit site</b-link
          >
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import CreatorsCard from "./CreatorsCard.vue";

export default {
  components: {
    CreatorsCard,
  },
  props: ["item"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
