export function includesMethod(array, element) {
  let itemIncluded = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
}
