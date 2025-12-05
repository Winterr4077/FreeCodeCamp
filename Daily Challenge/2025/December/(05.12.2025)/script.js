function difference(arr1, arr2) {
  const result = [];

  for (const val of arr1) {
    if (!arr2.includes(val)) result.push(val);
  }

  for (const val of arr2) {
    if (!arr1.includes(val)) result.push(val);
  }

  return result;
}
