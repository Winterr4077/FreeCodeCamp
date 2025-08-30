function findDuplicates(arr) {
  let duplicates = [];
  let counts = {};

for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (counts[value] == undefined){
      counts[value] = 1;
    } else {
      counts[value] += 1;
    }
}

for (let key in counts) {
  if (counts[key] > 1) {
    duplicates.push(Number(key));
  }
}

  duplicates.sort((a, b) => a - b);

  return duplicates;
}
