import http from 'http';
import url from 'url';
import { calculator } from './app.js';
import { numbers } from './numbers.js';
import dotenv from 'dotenv';
import { Command } from 'commander';

const commander = new Command();

dotenv.config();
commander.option('--port <port>', 'Server Port');
commander.parse(process.argv);
const options = commander.opts();

const PORT = options.port || process.env.PORT || 3000;

http.createServer((req, resp) => {
    const myUrl = url.parse(req.url);
    let template =
        '<h1>Introduce dos numeros para operar con el siguiente formato: ?a=6&b=3</h1>';
    if (myUrl.pathname !== '/calculator') {
        template = '<h1>Error 404 Pagina no disponible</h1>';
        resp.writeHead(404, { 'content-type': 'text/html' });
    } else if (myUrl.query !== null) {
        resp.writeHead(200, { 'content-type': 'text/html' });
        let finalNumbers = numbers(myUrl.query);
        template = calculator(finalNumbers);
    }
    resp.end(template);
}).listen(PORT);

console.log('Server running at http://localhost:' + PORT + '/calculator');
