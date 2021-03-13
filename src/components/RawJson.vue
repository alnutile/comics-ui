<template>
  <b-card>
    <vue-json-pretty :path="'res'" :data=json> </vue-json-pretty>
  </b-card>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
export default {
  components: {
    VueJsonPretty,
  },
  props: ['json'],
}
</script>

