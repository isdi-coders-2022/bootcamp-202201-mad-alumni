export const strictEquals = (a, b) => {
  if (isNaN(a) && isNaN(b)) {
    return false;
  } else if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  } else if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  }

  return Object.is(a, b);
};
