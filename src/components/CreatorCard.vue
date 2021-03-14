<template>
  <ul>
    <li v-for="creator in creators" :key="creator.id">
        {{ creator.name}}
        {{ creator.role }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['creators'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
