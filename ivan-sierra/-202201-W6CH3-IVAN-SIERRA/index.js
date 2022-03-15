import http from 'http';
import url from 'url';
const PORT = 1753;

/**/

const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url);
    let template = ''
    if(myUrl.query !== null){
        let queryNumbers = myUrl.query;
        console.log(queryNumbers);
        queryNumbers = queryNumbers.replaceAll('=','');
        console.log(queryNumbers);
        queryNumbers = queryNumbers.split('&',[2]);
        console.log(queryNumbers);
        const num1 = queryNumbers[0].replaceAll('a','');
        const num2 = queryNumbers[1].replaceAll('b','');
        console.log(num1, num2);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        console.log(template);

     template = calculator(num1,num2);

    }
    
    if (myUrl.pathname !== '/calculator') {
        let template = '<h1>Path Errónea</h1>';
        console.log(template);
    }
    res.end(template);

    

function calculator(num1,num2) {
    const a = num1;
    const b = num2;
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


});


server.listen(PORT);
//console.log('Server running at http://localhost:' + PORT);
