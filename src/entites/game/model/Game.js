import { ref, reactive } from "vue"
import { games } from "@/shared/functions/games.js"

export default class Game {
  constructor(level = 1) {
    this.game = games[level - 1] // -1 т.к. там массив
    this.score = ref(0)
    this.lives = ref(3)
    this.state = reactive(this.game.generate())
  }

  getName() {
    return this.game.name
  }

  getDescription() {
    return this.game.description
  }

  getScore() {
    return this.score
  }

  getLives() {
    return this.lives
  }

  getState() {
    return this.state
  }

  start() {
    Object.assign(this.state, this.game.generate())
    return this.state
  }

  checkAnswer(answer) {
    if (Number(answer) === this.state.correctAnswer) {
      this.score.value++
    } else {
      this.lives.value--
    }

    this.start()
  }
}
