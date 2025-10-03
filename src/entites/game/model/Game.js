import { ref, reactive } from "vue"

export default class Game {
  static games = {
    1: {
      name: "Калькулятор",
      description: "Посчитай пример",
      generate: () => {
        const a = Math.floor(Math.random() * 10 + 1)
        const b = Math.floor(Math.random() * 10 + 1)
        const operators = ["+", "-", "*"]
        const operator = operators[Math.floor(Math.random() * operators.length)]
        const result = {
          "+": a + b,
          "-": a - b,
          "*": a * b,
        }
        console.log(result[operator])
        return {
          gameQuestion: `Сколько будет ${a} ${operator} ${b}?`,
          correctAnswer: result[operator],
        }
      },
    },
  }

  constructor(level = 1) {
    this.game = Game.games[level]
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
