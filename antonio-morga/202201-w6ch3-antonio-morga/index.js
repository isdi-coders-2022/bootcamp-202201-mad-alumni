import http from 'http';
import { Command } from 'commander';
import url from 'url';
import { PORT } from './config.js';
import { calculator } from './calculator.js';

const program = new Command();
program.name('port').option('--port');
program.parse();
const myPort = program.args[0] ? program.args[0] : PORT;

const server = http.createServer((req, res) => {
    let template = '';
    const myUrl = url.parse(req.url);

    if (myUrl.pathname !== '/calculator') {
        template = '<h1>404 Pagina no encontrada</h1>';
    } else if (myUrl.pathname === '/calculator') {
        const operators = [...myUrl.query.match(/\d+/g)];
        template = calculator(operators);
    }
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(template);
});
server.listen(myPort);
console.log('Server running at http://localhost:' + myPort);
