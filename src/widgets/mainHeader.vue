<template>
  <header>
    <div class="wrapper">
      <mainIcon class="icon" id="mainIcon" />
      <router-link to="/main">
        <backIcon class="icon" id="backIcon" />
      </router-link>
    </div>
  </header>
</template>

<script setup>
  import mainIcon from "../shared/icons/mainIcon.vue"
  import backIcon from "../shared/icons/backIcon.vue"
</script>

<style scoped>
  header {
    width: 100%;
    background-color: #562dd2;
    display: flex;
    justify-content: center;
    align-items: center;
    place-self: center;
  }

  .wrapper {
    color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .icon {
    flex-shrink: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    &#mainIcon {
      height: clamp(4rem, 5vw, 5rem);
      width: clamp(4rem, 5vw, 5rem);
    }

    &#backIcon {
      height: clamp(3rem, 5vw, 4rem);
      width: clamp(3rem, 5vw, 4rem);
    }
  }
</style>
