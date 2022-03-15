export function findMethod(array, element) {
  let item;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return array[i];
    }
  }
}
