export function someMethod(array, element) {
  let different = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      different = true;
    }
  }
  return different;
}
