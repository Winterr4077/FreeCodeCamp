function count(str) {
  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i <= str.length - 1; i++) {
    if (/[a-z]/i.test(str[i])){
      if (/[aeiou]/i.test(str[i])){
        vowels++
      } else if (/[bcdfghjklmnpqrstvwxyz]/i.test(str[i])){
        consonants++
      }
    }
}
  return [vowels, consonants];
}
