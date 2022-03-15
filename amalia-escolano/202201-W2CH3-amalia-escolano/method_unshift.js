export function unShiftMethod(array, element) {
  const newArray = [element];
  for (let i = 1; i <= array.length; i++) {
    newArray[i] = array[i - 1];
  }
  return newArray;
}
