const http = require('http');
const url = require('url');
const { calculator } = require('./calc2');
require('dotenv').config();
const { program } = require('commander');

const portGenerator = () => {
    program.option('-p, --port', 'server port');
    program.parse();

    program.parse(process.argv);

    const options = program.opts();
    if (options.port) console.log(options);
    const optionPort = Number(program.args[0]);

    return optionPort || process.env.PORT;
};

const PORT = portGenerator();

const server = http.createServer(async (req, res) => {
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    let template;
    if (myUrl.pathname !== '/calculator') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        template = '<h1>Pagina no disponible</h1>';
    } else {
        try {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const numbers = myUrl.query
                .split('&')
                .map((item) => item.split('='));
            const number1 = Number(numbers[0][1]);
            const number2 = Number(numbers[1][1]);
            const calculations = await calculator([number1, number2]);
            let preparedString = calculations.split('\n');
            preparedString.shift();
            preparedString = preparedString.map((item) => item.trim());
            const numString = myUrl.query.split('&').join(', ');
            template = `
            <h1>Calculos para los numeros ${numString}</h1>
            `;
            preparedString.forEach((item) => {
                template += `<p>${item}</p>`;
            });
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            template = '<h1>Error en parametros</h1>';
            server.close();
        }
    }
    res.end(template);
});
server.listen(portGenerator(), () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
