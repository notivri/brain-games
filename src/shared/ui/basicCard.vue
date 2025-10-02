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
    width: 100%;
  }

  .logo {
    width: min(40vw, 10rem);
    height: min(40vw, 10rem);
    outline: solid 3px #562dd2;
    border-radius: 6px;
  }

  p {
    margin-top: 0.8rem;
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    text-align: center;
    word-break: break-word;
  }
</style>
