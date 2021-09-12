<template>
  <div>
    <header class="header" />
    <slot />
  </div>
</template>

<script lang="ts">

export default {
  name: "Home",
  components: {
    
  }
}

</script>

<style scoped>
.header {
  height: 5rem;
  background-color: green;
}
</style>