<template>
  <header>
    <div class="wrapper">
      <h3 style="color: white; margin-left: 1rem">Logo</h3>
      <router-link to="/main"> <div class="icon" /> </router-link>
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 100vw;
    min-height: 3rem;
    background-color: #562dd2;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 1rem;
  }

  .icon {
    height: 2.5rem;
    width: 2.5rem;
    background-color: white;
    border-radius: 50%;
  }
</style>
