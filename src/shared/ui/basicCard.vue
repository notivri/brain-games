<template>
  <div class="card">
    <div class="logo"></div>
    <p><slot /></p>
  </div>
</template>

<style scoped>
  .logo {
    height: 10rem;
    width: 10rem;
    background-color: #ffffff;
    outline: solid 3px #562dd2;
    border-radius: 3px;
  }

  p {
    margin-top: 1rem;
    font-size: 12pt;
    text-align: center;
  }
</style>
