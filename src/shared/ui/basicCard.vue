<template>
  <div class="card">
    <div class="logo">
      <slot name="logo" />
    </div>
    <p><slot name="title" /></p>
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
    width: min(40vw, 7rem);
    height: min(40vw, 7rem);
    outline: solid 3px #562dd2;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(61pt, 5vw, 82pt);
    font-weight: bold;
    color: rgb(134, 134, 134);
  }

  p {
    margin-top: 0.8rem;
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    text-align: center;
    word-break: break-word;
  }
</style>
