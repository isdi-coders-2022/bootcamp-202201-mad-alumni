export const calculator = (array) => {
    const [a, b] = [...array];
    if (Number.isNaN(+a) || Number.isNaN(+b)) process.exit();
    return `<h1>Results</h1>
    <ul>
        <li>${a} + ${b} = ${+a + +b}</li>
        <li>${a} - ${b} = ${+a - +b}</li>
        <li>${a} / ${b} = ${+a / +b}</li>
        <li>${a} * ${b} = ${+a * +b}</li>
    </ul>`;
};
