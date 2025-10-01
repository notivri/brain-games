<template>
  <div class="card">
    <div class="logo" />
    <p><slot /></p>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 40vw;
    max-width: 10rem;
    min-width: 6rem;
    height: 40vw;
    max-height: 10rem;
    min-height: 6rem;
    background-color: #ffffff;
    outline: solid 3px #562dd2;
    border-radius: 3px;
  }

  p {
    margin-top: 1rem;
    font-size: 1.1rem;
    text-align: center;
    word-break: break-word;
  }
</style>
