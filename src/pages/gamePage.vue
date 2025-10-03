<template>
  <div>
    <div class="wrapper">
      <div>
        <h2>{{ gameName }}</h2>
        <p>{{ gameDescription }}</p>
        <p>Очки: {{ userScore }}</p>
      </div>
      <div class="boxes">
        <div
          v-for="i in maxLives"
          :key="i"
          class="box"
          :class="{ inactive: i > userLives }"
        >
          <heartIcon />
        </div>
      </div>
    </div>

    <div class="task-container">
      <div class="task">
        {{ state.gameQuestion }}
      </div>
      <form class="buttons" @submit.prevent="handleSubmit">
        <basicInput v-model="userAnswer" />
        <basicButton type="submit" class="bold"> Ответить </basicButton>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from "vue"
  import { useRoute, useRouter } from "vue-router"
  import Game from "../entites/game/model/Game"
  import basicButton from "../shared/ui/basicButton.vue"
  import basicInput from "../shared/ui/basicInput.vue"
  import heartIcon from "../shared/icons/heartIcon.vue"

  const route = useRoute()
  const router = useRouter()

  const gameId = route.params.id
  const game = new Game(gameId)

  const gameName = game.getName()
  const gameDescription = game.getDescription()
  const maxLives = 3
  const userLives = game.getLives()
  const userScore = game.getScore()
  const state = game.getState()

  const userAnswer = ref("")

  const handleSubmit = () => {
    game.checkAnswer(userAnswer.value.toLowerCase())
    userAnswer.value = ""
  }

  watch(userLives, (lives) => {
    if (lives <= 0) {
      router.push({
        path: `/end/${userScore.value}/${gameId}`,
      })
    }
  })

  watch(userScore, (score) => {
    if (score >= 5) {
      router.push({
        path: `/end/${userScore.value}/${gameId}`,
      })
    }
  })
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

    &.inactive {
      background-color: #ff2c7c;
    }
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
