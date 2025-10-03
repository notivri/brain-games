import { getRandNum, getRandItemFrom } from "@/shared/functions/utils.js"

const list = [
  {
    name: "Калькулятор",
    description: "Посчитай пример",
    generate: () => {
      const operators = ["+", "-", "*"]
      const mapping = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
      }

      const num1 = getRandNum(1, 10)
      const num2 = getRandNum(1, 10)
      const operator = getRandItemFrom(operators)

      return {
        gameQuestion: `Сколько будет ${num1} ${operator} ${num2}?`,
        correctAnswer: mapping[operator](num1, num2),
      }
    },
  },
  {
    name: "Четное ли",
    description: "Определи, чётное число или нет",
    generate: () => {
      const num = getRandNum(1, 100)

      return {
        gameQuestion: `Чётное ли число ${num}?`,
        correctAnswer: num % 2 === 0 ? "да" : "нет",
      }
    },
  },
]

let id = 1

export const games = list.map((game) => ({ id: id++, ...game }))
