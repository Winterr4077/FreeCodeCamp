function mask(card) {
  const char = card.slice(0,card.length-4);
  const digits = card.slice (card.length - 4);
  let masked = "";

  for (let i = 0; i < char.length; i++) {
    if (char[i] >= '0' && char[i] <= '9'){
      masked += "*";
    } else {
      masked += char[i];
    }
}

  card = masked + digits;
  return card;
}

console.log(mask("4012-8888-8888-1881")) // should return "****-****-****-1881"
console.log(mask("5105 1051 0510 5100")) // should return "**** **** **** 5100"
console.log(mask("6011 1111 1111 1117")) // should return "**** **** **** 1117"
console.log(mask("2223-0000-4845-0010")) // should return "****-****-****-0010"
