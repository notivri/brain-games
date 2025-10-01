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
    border-radius: 3px;
    color: white;
    box-sizing: border-box;
  }

  .white {
    background-color: white;
    border: solid 2px #562dd2;
    color: #562dd2;
  }

  .h {
    height: 4rem;
    font-weight: 700;
    font-size: 21pt;
  }

  .bold {
    font-weight: 700;
  }

  button:active {
    transform: scale(0.98);
  }
</style>
