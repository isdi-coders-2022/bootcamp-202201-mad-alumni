/* eslint-disable no-unreachable */
export function strictEquals(a, b) {
  let result = Object.is(a, b);

  if (isNaN(a) && isNaN(b)) {
    return false;
  } else if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  } else if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  }
  return result;
}
