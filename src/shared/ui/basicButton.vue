<template>
  <button :class="$attrs.class">
    <slot />
  </button>
</template>

<style>
  button {
    width: 100%;
    max-height: 5rem;
    background-color: #562dd2;
    border-radius: 3px;
    color: white;
  }

  .white {
    background-color: white;
    border: solid 2px #562dd2;
    color: #562dd2;
  }

  .h {
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
