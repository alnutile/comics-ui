<template>
  <b-container>
      <b-row>
      <b-col>
        <comics-search></comics-search>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import ComicsSearch from '../components/ComicsSearch.vue'

export default {
  components: {
    ComicsSearch
  }
}
</script>
