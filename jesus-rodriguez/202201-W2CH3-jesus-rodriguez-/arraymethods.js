const animals = ['pigs', 'goats', 'sheep'];

export const pushArray = (arr, element) => {
  const lenghtArray = animals.length;
  arr[lenghtArray] = element;
  return animals;
};

export const popArray = (arr) => {
  const lenghtArray = arr.length;
  const newArray = [];
  for (let index = 0; index < lenghtArray - 1; index++) {
    newArray[index] = arr[index];
  }

  return newArray;
};

export const shiftArray = (arr) => {
  const lenghtArray = arr.length;
  const newArray = [];
  for (let index = 1; index < lenghtArray; index++) {
    newArray[index - 1] = arr[index];
  }
  return newArray;
};
export const unShiftArray = (arr, element) => {
  const lenghtArray = arr.length;
  const newArray = [];
  newArray[0] = element;
  for (let index = 0; index < lenghtArray; index++) {
    newArray[index + 1] = arr[index];
  }
  return newArray;
};

console.log(unShiftArray(animals, 'pepe'));
