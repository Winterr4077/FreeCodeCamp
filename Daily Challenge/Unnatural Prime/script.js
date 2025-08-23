function isUnnaturalPrime(n) {
  if (n === 1 || n === -1 || n === 0){
    return false;
  } 

  if (n < 0){
    n = n * -1;
  }

  if (n === 2){
    return true;
  } 

  for (let i = 2; i < n; i++) {
    if(n % i === 0){
      return false;
    } 
}  
  return true;
}
