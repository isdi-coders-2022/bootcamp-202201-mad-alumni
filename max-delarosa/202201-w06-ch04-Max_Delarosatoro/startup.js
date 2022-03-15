import inquirer from 'inquirer';
// import fs from 'fs';

export async function startup() {
    return inquirer.prompt([
        {
            name: 'port',
            message: 'In what port would you like to deploy?',
            type: 'number',
            default: 4000,
        },
        {
            type: 'list',
            message: 'Would you like to deploy in production or dev?',
            name: 'deployment',
            choices: ['Production', 'Development'],
        },
        {
            type: 'list',
            message: 'Would you like to allow clients to erase / edit?',
            name: 'permissions',
            choices: ['Yes', 'No'],
        },
    ]);
}
// .then((answer) => {
//     console.log(answer);
//     fs.writeFile(
//         '.serverconfig.json',
//         JSON.stringify(answer),
//         function (err) {
//             if (err) throw err;
//             console.log('File is created successfully.');
//         }
//     );
// });
