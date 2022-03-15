import inquirer from 'inquirer';

const dataBases = ['Produccion', 'Test'];

export const apiInit = async () =>
    inquirer.prompt([
        {
            name: 'dbType',
            message: '¿Que base de datos quieres usar?',
            type: 'list',
            choices: dataBases,
        },
        {
            name: 'PORT',
            message: '¿En que puerto quieres que se inicie la API?',
            type: 'number',
        },
        {
            name: 'fullCrud',
            message:
                '¿Quieres permitir que los clientes puedan crear, borrar y modificar?',
            type: 'confirm',
        },
    ]);
