<template>
  <div class="logo" />
  <h1>Brain Brain</h1>
  <div class="wrapper">
    <div class="grid-wrapper">
      <router-link to="/select" class="wide">
        <basicButton class="h"> Играть </basicButton>
      </router-link>
      <div class="flex-row">
        <router-link to="/select" class="half">
          <basicButton class="white h"> Очки </basicButton>
        </router-link>
        <router-link to="/select" class="half">
          <basicButton class="white h"> ? </basicButton>
        </router-link>
      </div>
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
    display: block;
  }

  h1 {
    text-align: center;
    font-size: 36pt;
  }

  .wrapper {
    padding: 1rem;
  }

  .grid-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    align-items: stretch;
  }

  .wide {
    width: 100%;
  }

  .flex-row {
    display: flex;
    gap: 1rem;
  }

  .half {
    flex: 1 1 0;
    width: 100%;
    margin: 0;
    padding: 0;
    display: block;
  }
</style>
