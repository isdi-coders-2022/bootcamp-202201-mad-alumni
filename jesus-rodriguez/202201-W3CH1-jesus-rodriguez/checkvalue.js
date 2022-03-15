export function checkValue(valor) {
  if (valor === undefined) {
    return '';
  } else {
    return valor;
  }
}

console.log(checkValue(undefined));
