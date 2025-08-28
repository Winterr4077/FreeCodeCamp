function getLaptopCost(laptops, budget) {
  let list = [];
  let filtered = [];

  for (let i = 0; i < laptops.length; i++) {
    if (laptops[i] <= budget) {
      list.push(laptops[i]);
    }
  }

  for (let i = 0; i < list.length; i++) {
    if (!filtered.includes(list[i])) {
      filtered.push(list[i]);
    }
  }

  let allUnique = [];
  for (let i = 0; i < laptops.length; i++) {
    if (!allUnique.includes(laptops[i])) {
      allUnique.push(laptops[i]);
    }
  }
  
  allUnique.sort((a, b) => b - a);

  filtered.sort((a, b) => b - a);

  if (filtered.length === 0) {
    return 0;
  }

  if (allUnique[0] <= budget && allUnique.length >= 2) {
    return allUnique[1];
  }

  return filtered[0];
}
