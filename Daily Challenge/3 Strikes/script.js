function squaresWithThree(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let square = i * i;
    square.toString()
    if(square.toString().includes("3")){
      count += 1;
    }
  }
  return count;
}
