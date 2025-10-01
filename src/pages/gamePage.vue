<template>
  <div>
    <div class="wrapper">
      <h2>Название игры</h2>
      <div class="boxes">
        <div class="box" />
        <div class="box" />
        <div class="box" />
      </div>
    </div>

    <div class="task">Пример:</div>
    <div class="buttons">
      <basicInput></basicInput>
      <basicButton class="bold">Ответить</basicButton>
    </div>
  </div>
</template>

<script setup>
  import basicButton from "../shared/ui/basicButton.vue"
  import basicInput from "../shared/ui/basicInput.vue"
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 2rem;
  }

  .boxes {
    display: flex;
    gap: 1rem;
  }

  .box {
    height: 1.5rem;
    width: 1.5rem;
    border: 2px solid #562dd2;
  }

  .task {
    height: 10rem;
    margin: 0 2rem;
    text-align: center;
    padding-top: 1rem;
    background-color: #ffffff;
    border: solid 2px #562dd2;
    border-radius: 2px;
    font-weight: bold;
  }

  .buttons {
    height: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;
  }
</style>
