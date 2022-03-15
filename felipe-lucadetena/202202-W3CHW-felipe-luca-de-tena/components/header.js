import { Component } from './render.js';

export class Header extends Component {
    template;
    constructor() {
        super();
        this.template = `<header>
        <img class="header__image" src="./images/60422-1.png" alt="none" />
        <img class="header__image-2" src="../images/klipartz.com.png" alt="none" />
        <ul class="nav">
            <li><a href="./index.html" class="nav__link"> Pokedex</a><img class="pokeball" src="/images/pngwing.com.png" alt="none" />;</li>
            <li>
                <a href="./html/favourites.html" class="nav__link"
                    >Favourites</a
                ><img class="pokeball" src="/images/pngwing.com.png" alt="none" />;
            </li>
        </ul>
    </header>`;
        this.render('#header');
    }
}
