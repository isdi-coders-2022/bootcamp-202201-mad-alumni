export function filterMethod(array, element) {
  const filteredItems = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      filteredItems[filteredItems.length] = array[i];
    }
  }
  return filteredItems;
}
