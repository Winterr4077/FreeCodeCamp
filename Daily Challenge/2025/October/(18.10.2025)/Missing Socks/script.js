function sockPairs(pairs, cycles) {
  let socks = pairs * 2;

  for (let i = 1; i <= cycles; i++) {
    if (i % 2 === 0){
      socks--;
    }
    if (i % 3 === 0) {
      socks++;
    }
    if (i % 5 === 0) {
      socks --;
    }
    if (i % 10 === 0) {
      socks = socks + 2;
    }
    if (socks < 0) {
      socks = 0;
    }
}
  pairs = socks / 2;
  return Math.floor(pairs);
}

console.log(sockPairs(2, 5)) // sockPairs(2, 5) should return 1
console.log(sockPairs(1, 2)) // sockPairs(1, 2) should return 0
console.log(sockPairs(5, 11)) // sockPairs(5, 11) should return 4
console.log(sockPairs(6, 25)) // sockPairs(6, 25) should return 3
console.log(sockPairs(1, 8)) // sockPairs(1, 8) should return 0
