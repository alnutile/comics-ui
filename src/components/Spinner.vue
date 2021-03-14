<template>
  <div class="d-flex justify-content-center mb-3">
    <b-spinner label="Loading..." :variant="variant"></b-spinner>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      default: "success",
    },
  },
};
</script>
