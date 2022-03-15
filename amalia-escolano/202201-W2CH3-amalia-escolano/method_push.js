export function pushMethod(array, element) {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    arrayResult[i] = array[i];
  }
  arrayResult[array.length] = element;
  return arrayResult;
}
