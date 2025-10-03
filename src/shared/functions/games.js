import { getRandNum, getRandItemFrom } from "@/shared/functions/utils.js"

export const games = [
  {
    id: 1,
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
]
