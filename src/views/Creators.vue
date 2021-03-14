<template>
  <b-container>
      <b-row>
      <b-col>
        <creators-search></creators-search>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import CreatorsSearch from '../components/CreatorsSearch.vue'

export default {
  components: {
    CreatorsSearch
  }
}
</script>
