import { Header } from "../components/header.js";
import { Topheroes } from "../components/topheroes.js";
import { Searchbar } from "../components/searchbar.js";
import { Heroeslist } from "../components/heroeslist.js";
import { Detail } from "../components/detail.js";
import { Heroes } from "../heroes.js";

(() => {
  const main = () => {
    if (!localStorage.getItem("heroes")) {
      localStorage.setItem("heroes", JSON.stringify(Heroes));
    }

    new Header().render("#header");
    switch (location.pathname) {
      case "/index.html":
        new Topheroes().render("#topheroes");
        new Searchbar().render("#searchbar");
        break;

      case "/pages/heroes.html":
        new Heroeslist();
        break;

      default:
        new Detail().render("#detail");
        break;
    }
  };

  document.addEventListener("DOMContentLoaded", main);
})();
