const config = require('./config');
const http = require('http');
const url = require('url');
console.log(config);
function calculator(a, b) {
    //const [a, b] = [...args];

    if (isNaN(+a) || isNaN(-b)) {
        throw new Error('Párametro no válido');
    } else {
        const result = `
    ${a} + ${b} = ${+a + +b}
    ${a} - ${b} = ${+a - +b}
    ${a} * ${b} = ${+a * +b}
    ${a} / ${b} = ${+a / +b}
    `;
        return result;
    }
}

const server = http.createServer((req, resp) => {
    const myUrl = url.parse(req.url);
    console.log({ myUrl });
    // let theQuery = myUrl.query;
    // console.log(theQuery);
    resp.writeHead(200, { 'Content-Type': 'text/html' });

    let template = '';
    if (myUrl.pathname !== '/' && myUrl.pathname !== '/calculator') {
        template = '<h1>Error 404- Page not found</h1>';
    } else if (myUrl.query !== null) {
        let ops = myUrl.query;
        let onlyNumbers = ops.split('&');

        let num1 = onlyNumbers[0].split('=');
        let num2 = onlyNumbers[1].split('=');

        const a = num1[1];
        const b = num2[1];
        if (isNaN(a) || isNaN(b)) {
            process.exit;
        }
        template = calculator(a, b);
        // let firstValue = nums[1]
    }
    // } else if (myUrl.pathname === '/calculator' && myUrl.query !== null) {
    //     let numberPattern = /\d+/g;
    //     let ops = myUrl.search.match(numberPattern);
    //     template = calculator(ops);

    resp.end(template);
});

server.listen(config.PORT);
console.log('Server running at http://localhost:' + config.PORT);
