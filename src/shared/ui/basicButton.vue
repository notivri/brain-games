<template>
  <button :class="$attrs.class">
    <slot />
  </button>
</template>

<style scoped>
  button {
    all: unset;
    text-align: center;
    width: 100%;
    min-height: 2.5rem;
    background-color: #562dd2;
    border-radius: 6px;
    color: white;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }

  .white {
    background-color: white;
    border: solid 2px #562dd2;
    color: #562dd2;
  }

  .h {
    min-height: 3.5rem;
    font-weight: 700;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
  }

  .bold {
    font-weight: 700;
  }

  button:active {
    transform: scale(0.97);
  }
</style>
