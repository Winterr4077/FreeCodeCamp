function toCamelCase(s) {
const array = s.split(/[ \-_]+/);

const newArray = array.map((word, index) => {
  if (index === 0) {
    return word.toLowerCase();
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
});

  const result = newArray.join("");;
  return result;
}
