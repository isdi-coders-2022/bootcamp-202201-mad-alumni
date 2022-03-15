import http from 'http';
import url from 'url';

function calculator([numbers]) {
    const [a, b] = [...numbers];
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

const PORT = 1753;
const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url);
    console.log({ myUrl });
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let template = '<h1>Este servidor dice "Hola mundo"</h1>';
    if (myUrl.pathname !== '/' && myUrl.pathname !== '/home') {
        template = '<h1>Pagina no disponible</h1>';
    }

    if (myUrl.query !== null) {
        let numberPattern = /\d+/g;
        let a = myUrl.search;
        let numbers = a.match(numberPattern);
        console.log(numbers);
        console.log(calculator[numbers]);
        template = calculator([numbers]);
    }
    res.end(template);
});
server.listen(PORT);
console.log('Server running at http://localhost:' + PORT);
