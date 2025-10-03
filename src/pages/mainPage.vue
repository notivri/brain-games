<template>
  <div>
    <div class="logo">
      <mainIcon />
    </div>
    <div class="wrapper">
      <h1>Brain Games</h1>
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
  </div>
</template>

<script setup>
  import basicButton from "../shared/ui/basicButton.vue"
  import mainIcon from "../shared/icons/mainIcon.vue"
</script>

<style scoped>
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem 1rem 0 1rem;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    font-size: clamp(2rem, 6vw, 3rem);
    margin-top: 0.5rem;
  }

  .grid-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    align-items: stretch;
    margin-top: 0.5rem;
  }

  .wide {
    width: 100%;
  }

  .flex-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .half {
    flex: 1 1 45%;
  }
</style>
