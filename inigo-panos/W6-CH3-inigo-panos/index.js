import http from 'http';
import url from 'url';

const PORT = 1492;
const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let template = '<h1>Hola Mundo</h1>';
    if (myUrl.pathname !== '/' && myUrl.pathname !== '/calculator') {
        template = '<h1>Error 404</h1>';
    } else if (myUrl.query !== null) {
        let numbers = myUrl.query;

        let arr = numbers.split('&');
        console.log(arr + ' array');
        const num1 = arr[0].split('=');
        const num2 = arr[1].split('=');

        let a = num1[1];
        let b = num2[1];
        console.log(a, b);

        if (isNaN(a) || isNaN(b)) {
            //process.exit(0);
            console.log('error!');
        } else {
            template = calculator2(a, b);
            console.log(calculator2(a, b));
        }
    }

    res.end(template);
});
server.listen(PORT);
console.log('Server running at http://localhost/:' + PORT);

function calculator2(a, b) {
    const result = ` ${a} + ${b} = ${+a + +b}
    ${a} - ${b} = ${+a - +b}
    ${a} * ${b} = ${+a * +b}
    ${a} / ${b} = ${+a / +b}`;
    return result;
}
