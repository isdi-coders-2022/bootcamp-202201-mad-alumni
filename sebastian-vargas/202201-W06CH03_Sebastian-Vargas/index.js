import http from 'http';
import url from 'url';
const PORT = 8000;

http.createServer((req, res) => {
    const myUrl = url.parse(req.url);
    console.log({ myUrl });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    let template = '<h1>This server says: "this works".</h1>';
    if (myUrl.pathname !== '/' && myUrl.pathname !== '/calculator') {
        template = '<h1>Pagina no disponible</h1>';
    }

    if (myUrl.query !== null) {
        const numbers = myUrl.query;
        console.log(numbers);

        var numberPattern = /\d+/g;
        const r = numbers.match(numberPattern);
        console.log(r);

        template = calculator(r);
    }

    res.end(template);
}).listen(PORT);

export function calculator(r) {
    const [a, b] = [...r];
    if (isNaN(+a) || isNaN(-b)) {
        throw new Error('Parámetro no válido');
    }
    const result = `
    ${a} + ${b} = ${+a + +b}
    ${a} - ${b} = ${+a - +b}
    ${a} * ${b} = ${+a * +b}
    ${a} / ${b} = ${+a / +b}
    `;
    return result;
}

console.log('Server running at http://localhost:' + PORT);
