<template>
  <div class="logo" />
  <h1>Brain Brain</h1>
  <div class="wrapper">
    <div class="grid-wrapper">
      <router-link to="/select" class="wide">
        <basicButton>Играть</basicButton>
      </router-link>
      <router-link to="/select" class="half">
        <basicButton class="white"> Очки </basicButton>
      </router-link>
      <router-link to="/select" class="half">
        <basicButton class="white"> ? </basicButton>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import basicButton from "../shared/ui/basicButton.vue"
</script>

<style scoped>
  .logo {
    height: 45vh;
    width: 100%;
    background-color: #562dd2;
    margin: 0 auto;
    display: block;
  }

  h1 {
    text-align: center;
    font-size: 36pt;
  }

  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 2.5rem;
    width: 100%;
    max-width: 25rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .wide {
    grid-column: 1 / span 2;
  }

  .half {
    width: 100%;
  }
</style>
