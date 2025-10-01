<template>
  <div class="input-wrapper">
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
    />
  </div>
</template>

<script setup>
  defineProps({
    modelValue: String,
  })
</script>

<style scoped>
  .input-wrapper {
    width: 100%;
    max-width: 500px;
  }

  input {
    width: 100%;
    background-color: #ffffff;
    border: solid 2px #562dd2;
    border-radius: 6px;
    color: black;
    box-sizing: border-box;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    padding: 0.6rem 0.8rem;
    transition:
      box-shadow 0.2s ease-in-out,
      border-color 0.2s;
  }

  input:focus {
    outline: none;
    border-color: #562dd2;
    box-shadow: 0 0 6px rgba(86, 45, 210, 0.5);
  }
</style>
