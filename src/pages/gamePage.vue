<template>
  <div>
    <div class="wrapper">
      <h2>Название игры</h2>
      <div class="boxes">
        <div class="box"><heartIcon /></div>
        <div class="box"><heartIcon /></div>
        <div class="box"><heartIcon /></div>
      </div>
    </div>

    <div class="task-container">
      <div class="task">Пример:</div>
      <div class="buttons">
        <basicInput />
        <basicButton class="bold"> Ответить </basicButton>
      </div>
    </div>
  </div>
</template>

<script setup>
  import basicButton from "../shared/ui/basicButton.vue"
  import basicInput from "../shared/ui/basicInput.vue"
  import heartIcon from "../shared/icons/heartIcon.vue"
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
    max-width: 900px;
    gap: 1rem;
    padding: 0 1rem;
  }

  .boxes {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 6px;
    background-color: #92da63;
  }

  .task-container {
    margin-top: 3rem;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .task {
    min-height: 5rem;
    margin: 1.5rem auto;
    max-width: 900px;
    text-align: center;
    padding: 1.5rem;
    background-color: #ffffff;
    border: solid 2px #562dd2;
    border-radius: 6px;
    font-weight: bold;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem auto;
    max-width: 900px;
    align-items: center;
    justify-content: center;
  }

  .buttons > * {
    flex: 1 1 200px;
  }
</style>
