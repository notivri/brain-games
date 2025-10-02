<template>
  <div
    class="endgame-page"
    :class="{
      win: isWin,
      lose: !isWin,
    }"
  >
    <h1>{{ isWin ? "Победа!" : "Проигрышь!" }}</h1>
    <div class="image" />
    <basicButton
      :class="{
        white: !isWin,
      }"
      class="bold basicButton"
      @click="$router.push(isWin ? '/main' : `/game/${$route.params.id}`)"
    >
      Продолжить
    </basicButton>
  </div>
</template>
<script setup>
  import basicButton from "../shared/ui/basicButton.vue"
  import { useRoute } from "vue-router"
  const route = useRoute()
  const score = route.params.score
  const isWin = score >= 5
</script>
<style scoped>
  .image {
    background-color: #fff;
    width: 20rem;
    height: 20rem;
    border-radius: 5%;
    margin: 2rem 0;
  }
  .endgame-page {
    transform: translateY(-0.5rem);
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height: 100vh;
    background-color: #f0f0f0;
    text-align: center;
  }
  .basicButton {
    font-size: 16pt;
    width: 16rem;
    height: 3.5rem;
  }
  .win {
    color: black;
    background-color: #fff;
  }
  .lose {
    color: #fff;
    background-color: #562dd2;
  }
</style>
