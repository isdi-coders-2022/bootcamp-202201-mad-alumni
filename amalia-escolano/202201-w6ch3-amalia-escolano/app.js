export function calculator(args) {
    const [a, b] = [...args];

    const result = `
    <h1>Resultados</h1>
    <ul>
    <li>${a} + ${b} = ${+a + +b}</li>
    <li>${a} - ${b} = ${+a - +b}</li>
    <li>${a} * ${b} = ${+a * +b}</li>
    <li>${a} / ${b} = ${parseFloat(+a / +b).toFixed(2)}</li>
    `;
    return result;
}
