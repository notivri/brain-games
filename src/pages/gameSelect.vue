<template>
  <div class="grid-wrapper">
    <basicCard>Game Name</basicCard>
    <basicCard>Game Name</basicCard>
    <basicCard>Game Name</basicCard>
    <basicCard>Game Name</basicCard>
    <basicCard>Game Name</basicCard>
    <basicCard>Game Name</basicCard>
  </div>
</template>

<script setup>
  import basicCard from "../shared/ui/basicCard.vue"
</script>

<style scoped>
  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-items: center;
    align-items: center;
    width: 100%;
    max-width: 32rem;
    margin: 0 auto;
    padding: 2rem; /* такой же, как gap */
    box-sizing: border-box;
  }
</style>
