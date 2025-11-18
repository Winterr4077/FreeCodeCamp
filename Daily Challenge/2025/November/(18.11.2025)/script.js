function oneHundred(chars) {
  while (chars.length < 100) chars += chars;
  chars = chars.slice(0,100);

  return chars;
}
