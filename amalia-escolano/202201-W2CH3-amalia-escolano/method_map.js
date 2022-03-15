export function mapMethod(array, element) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] + element;
  }
  return newArray;
}
