<template>
  <div id="app">
    <main class="page landing-page">
      <section class="clean-block features">
        <b-container fluid="sm">
          <b-card
            title="Search the different comic book databases"
            sub-title="Marvel, DC (coming soon), Dark Horse (coming soon) etc"
          >
            <b-card-text>
              <comics-search></comics-search>
            </b-card-text>
          </b-card>
        </b-container>
      </section>
    </main>
  </div>
</template>

<script>
import ComicsSearch from "./components/ComicsSearch.vue";

export default {
  name: "App",
  components: {
    ComicsSearch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
