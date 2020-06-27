function pairs(x, y) {
  var numbers = []
  for (let i = x; i < y; i++) {
    if (i % 2 === 0) {
      numbers.push(i);
    }
  }
  console.log(numbers)
}

pairs(32, 321);