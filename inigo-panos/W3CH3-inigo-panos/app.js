// import { Component } from './modules/componente.js';
import { HeaderHero } from './modules/header.js';
// import { Heroes } from './modules/heroes-list.js';
// import { Detail } from './modules/detail.js';
import { Dashboard } from './modules/dashboard.js';
//Import dashboard, header, heroeslist, detail

(() => {
    const main = () => {
        new Dashboard().render('#dashboard');
        new HeaderHero().render('#header');
        // new Detail().render('#detail');
        // new Heroes().render('#heroes-list');
    };

    document.addEventListener('DOMContentLoaded', main);
})();

//Function app. new Header. Un switch para elegir la localización (location.pathname).
//Depende de donde esté, carga dashboard o carga heroes list
