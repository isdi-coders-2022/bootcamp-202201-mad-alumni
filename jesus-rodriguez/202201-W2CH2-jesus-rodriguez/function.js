export function strictEquals(num1, num2) {
  if (isNaN(num1) && isNaN(num2)) {
    return false;
  } else if (Object.is(num1, -0) && Object.is(0, num2)) {
    return true;
  } else if (Object.is(0, num1) && Object.is(num2, -0)) {
    return true;
  } else {
    return Object.is(num1, num2);
  }
}
