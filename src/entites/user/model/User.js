export default class User {
  constructor() {
    this.stats = {
      gamesPlayed: 0,
      highScore: 0,
      totalScore: 0,
      totalWins: 0,
      totalLoses: 0,
    }
  }

  updateStats({ result, score }) {
    this.gamesPlayed++
    this.totalScore += score
    this.highScore = this.highScore < score ? this.highScore : score

    if (result === "win") {
      this.totalWins++
    } else {
      this.totalLoses++
    }
  }

  save() {
    localStorage.setItem("user", JSON.stringify(this))
  }
}
