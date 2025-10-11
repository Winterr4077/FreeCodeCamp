function hexToDecimal(hex) {
  let decimal = 0;

  for (let i = 0; i < hex.length; i++) {
    let power = hex.length - 1 - i;
    let currentChar = hex[i];

    if (currentChar >= '0' && currentChar <= '9') {
      let value = Number(currentChar);
      decimal += value * (16 ** power);
    } else {
      let value = 10 + (currentChar.charCodeAt(0) - 'A'.charCodeAt(0));
      decimal += value * (16 ** power);
    }
  }

  return decimal;
}

console.log(hexToDecimal("A")) // should return 10
console.log(hexToDecimal("15")) // should return 21
console.log(hexToDecimal("2E")) // should return 46
console.log(hexToDecimal("FF")) // should return 255
console.log(hexToDecimal("A3F")) // should return 2623
