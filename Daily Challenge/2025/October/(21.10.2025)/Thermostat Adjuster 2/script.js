function adjustThermostat(currentF, targetC) {
  const targetF = (targetC * 1.8) + 32;

  if (currentF === targetF) {
    return "Hold";
  }

  const difference = (Math.round(Math.abs(targetF - currentF) * 10) / 10).toFixed(1);

  if (currentF < targetF) {
    return `Heat: ${difference} degrees Fahrenheit`;
  } else {
    return `Cool: ${difference} degrees Fahrenheit`;
  }
}

console.log(adjustThermostat(32, 0));   // should return "Hold"
console.log(adjustThermostat(70, 25));  // should return "Heat: 7.0 degrees Fahrenheit"
console.log(adjustThermostat(72, 18));  // should return "Cool: 7.6 degrees Fahrenheit"
console.log(adjustThermostat(212, 100));  // should return "Hold"
console.log(adjustThermostat(59, 22));  // should return "Heat: 12.6 degrees Fahrenheit"
