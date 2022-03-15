// function greetings() {
//     console.log('Hola mundo');
// }

function args() {
    return process.argv.slice(2);
}

module.exports = {
    args,
};
