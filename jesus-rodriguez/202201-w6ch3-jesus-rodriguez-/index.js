import http from 'http';
import url from 'url';

const PORT = 3000;
let numberPattern = /\d+/g;
let template = '';

export function calculator(nums) {
    let template = '';
    const [a, b] = [...nums];
    template = `
    ${a} + ${b} = ${+a + +b}
    ${a} - ${b} = ${+a - +b}
    ${a} * ${b} = ${+a * +b}
    ${a} / ${b} = ${+a / +b}
    `;

    return template;
}

const server = http.createServer((req, resp) => {
    const myUrl = url.parse(req.url);
    let nums = myUrl.query;
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    template = "<h1>El servidor dice 'Hola Mundo'</h1>";

    if (myUrl.pathname !== '/' && myUrl.pathname !== '/calculators') {
        template = '<h1>ERROR 404:Page not found</h1>';
        resp.end(template);
    } else if (myUrl.query !== null) {
        let arr = nums.match(numberPattern);
        if (isNaN(arr[0]) || isNaN(arr[1])) {
            console.log('pep');
            template =
                '<h1>ERROR: No ha introducido los parametros correctos</h1>';
            resp.end(template);
            // process.exit(0);
        } else {
            resp.end(calculator(arr));
        }
    }
});
server.listen(PORT);
console.log('Server running at http://localhost:' + PORT);
