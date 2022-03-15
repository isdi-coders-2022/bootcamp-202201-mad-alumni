import { Details } from './components/details.js';
import { Header } from './components/header.js';

async function app() {
    new Header();
    new Details();
}

document.addEventListener('DOMContentLoaded', app);
