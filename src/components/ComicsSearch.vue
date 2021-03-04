<template>
  <div>
    <b-input-group size="lg" class="mb-3">
      <b-form-input
        v-model="search"
        placeholder="Enter Creator Name or Comic Name"
      ></b-form-input>
      <b-input-group-append>
        <b-button size="sm" text="Button" variant="dark" @click="searchApi"
          >Search</b-button
        >
      </b-input-group-append>
    </b-input-group>
    <div class="mt-2">Value: {{ search }}</div>
  </div>
</template>

<script>
export default {
  name: "ComicsSearch",
  data() {
    return {
      search: null,
    };
  },
  methods: {
    searchApi() {
      this.axios
        .get(
          `http://gateway.marvel.com/v1/public/comics?apikey=${process.env.VUE_APP_MARVEL_PUBLIC}`
        )
        .then((results) => {
          console.log(results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
