function isValidMessage(message, validator) {
  const words = message.split(" ");
  const messageLength = words.length;
  const validatorLength = validator.length;

  if (messageLength != validatorLength){
    return false;
  }

  for (let i = 0; i < messageLength; i++) {
    let wordsIndex = words[i];
    let validatorIndex = validator[i];

    let firstLetter = wordsIndex[0].toLowerCase();
    let validatorLetter = validatorIndex.toLowerCase();

    if (firstLetter !== validatorLetter) {
      return false;
    }
  }
return true;
}
