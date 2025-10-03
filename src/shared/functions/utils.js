function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandItemFrom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export { getRandNum, getRandItemFrom }
