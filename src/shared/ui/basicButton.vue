<template>
  <button :class="$attrs.class">
    <slot />
  </button>
</template>

<style>
  button {
    height: 5rem;
    width: 100%;
    min-width: 8rem;
    background-color: #562dd2;
    border-radius: 3px;
    color: white;
    font-weight: 700;
    font-size: 21pt;
  }
  .white {
    background-color: white;
    border: solid 3px #562dd2;
    color: #562dd2;
  }
</style>
