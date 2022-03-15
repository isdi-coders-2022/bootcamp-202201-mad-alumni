export const myPush = (element, array) => {
  array[array.length] = element;
  return array[array.length - 1];
};
