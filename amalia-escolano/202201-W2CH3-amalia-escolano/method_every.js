export function everyMethod(array, element) {
  let allSame = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      allSame = false;
    }
  }
  return allSame;
}
