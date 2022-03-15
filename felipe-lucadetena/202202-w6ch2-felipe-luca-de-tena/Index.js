const { match } = require('assert');
const http = require('http');
const url = require('url');
const PORT = 1753;
const server = http.createServer((req, resp) => {
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    let template = '';
    const numberPattern = /\d+/g;

    if (myUrl.pathname === '/home') {
        template = '<h1> Hello World!! </h1>';
    } else if (myUrl.pathname === '/calc') {
        const nums = myUrl.search.match(numberPattern);
        template = calculator(nums);
    } else {
        template = '<h1>error wrong pathname</h1>';
    }

    resp.end(template);
});

server.listen(PORT);
console.log('server running at http://localhost:' + PORT);

function calculator(args) {
    const [a, b] = [...args];
    if (isNaN(+a) || isNaN(-b)) {
        throw new Error('Parámetro no válido');
    }
    const result = `
    ${a} + ${b} = ${+a + +b}
    ${a} - ${b} = ${+a - +b}
    ${a} * ${b} = ${+a * +b}
    ${a} / ${b} = ${+a / +b}
    `;
    console.log(result);
    return result;
}
