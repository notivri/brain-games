<template>
  <div class="grid-wrapper">
    <router-link v-for="game in games" to="/game" :key="game.name">
      <basicCard>
        {{ game.name }}
      </basicCard>
    </router-link>
  </div>
</template>

<script setup>
  import basicCard from "../shared/ui/basicCard.vue"

  const games = [
    { name: "Game 1" },
    { name: "Game 2" },
    { name: "Game 3" },
    { name: "Game 4" },
    { name: "Game 5" },
    { name: "Game 6" },
  ]
</script>

<style scoped>
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 2fr));
    justify-items: center;
    align-items: center;
    width: 100%;
    max-width: 64rem;
    gap: clamp(1rem, 4vw, 2rem);
    padding: clamp(1rem, 4vw, 2rem);
    padding-top: clamp(1rem, 5vw, 3rem);
    box-sizing: border-box;
  }
</style>
