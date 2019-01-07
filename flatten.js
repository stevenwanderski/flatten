function flatten(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  let flattened = [];

  for (var i = 0; i < array.length; i++) {
    const element = array[i];

    if (Array.isArray(element)) {
      flattened = flattened.concat(flatten(element));
    } else {
      flattened.push(element)
    }
  }

  return flattened;
}

module.exports = flatten;
