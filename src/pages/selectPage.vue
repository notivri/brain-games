<template>
  <div class="grid-wrapper">
    <router-link v-for="game in games" :to="`/game/${game.id}`" :key="game.id">
      <basicCard>
        {{ game.name }}
      </basicCard>
    </router-link>
  </div>
</template>

<script setup>
  import basicCard from "../shared/ui/basicCard.vue"
  import { games } from "@/shared/functions/games.js"
</script>

<style scoped>
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    justify-items: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    gap: 1.5rem;
    padding: 1rem;
    box-sizing: border-box;
  }
</style>
