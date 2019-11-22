function mathRandom (min, max, num) {
  if (num) {
    let tempArr = []
    for (let i = 0; i < num; i++) {
      tempArr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return tempArr
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

console.log(mathRandom(100,300,6))
