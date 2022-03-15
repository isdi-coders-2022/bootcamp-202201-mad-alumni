import http from 'http';
import url from 'url';

const PORT = 8000;
const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url);
    console.log({ myUrl });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let template = '<h1>Este servidor dice "Hola mundo"</h1>';
    if (myUrl.pathname !== '/' && myUrl.pathname !== '/home') {
        template = '<h1>Pagina no disponible</h1>';
    }

    if (myUrl.query !== null) {
        let numbers = myUrl.query;
        const numberPattern = /\d+/g;
        numbers.match(numberPattern);
        let resp = numbers.match(numberPattern);
        console.log(resp);
        template = calculator(resp);
    }

    res.end(template);
});
server.listen(PORT);
console.log('Server running at http://localhost:' + PORT);

export function calculator(resp) {
    const [a, b] = [...resp];
    if (isNaN(+a) || isNaN(-b)) {
        throw new Error('Parámetro no válido');
    }
    const result = `
    ${a} + ${b} = ${+a + +b}
    ${a} - ${b} = ${+a - +b}
    ${a} * ${b} = ${+a * +b}
    ${a} / ${b} = ${+a / +b}`;
    return result;
}
