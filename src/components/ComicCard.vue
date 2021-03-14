<template>
  <b-card no-body style="width: 30rem;" class="m-1 overflow-hidden">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="`${item.thumbnail.path}/standard_xlarge.jpg`" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="item.title">
          <b-card-text>
            <creator-card :creators="item.creators.items"></creator-card>
          </b-card-text>
          <b-link :href="item.urls[0]['url']" target="_blank">visit site</b-link>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import CreatorCard from "./CreatorCard.vue"

export default {
  components: {
    CreatorCard
    },
  props: ['item'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
