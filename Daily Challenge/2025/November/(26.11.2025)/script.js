function isFizzBuzz(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    const n = i + 1;
    let phrase;

    if (n % 15 === 0) phrase = "FizzBuzz";
    else if (n % 3 === 0) phrase = "Fizz";
    else if (n % 5 === 0) phrase = "Buzz";
    else phrase = n;

    if (sequence[i] !== phrase) {
      return false;
    }
  }
  return true;
}
