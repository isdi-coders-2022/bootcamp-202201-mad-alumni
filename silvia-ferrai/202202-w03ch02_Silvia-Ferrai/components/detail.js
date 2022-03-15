// import { HEROES } from '../components/heroes-list.js';
// import { Components } from '../components/component.js';

// export class Detail extends Components {
//     template;
//     constructor(selector) {
//         super();
//         this.heroId = Number(location.search.split('=')[1]);

//         this.selectedHero = HEROES.find((item) => item.id === this.heroId);
//         this.template = this.#createTemplate();
//         this.render(selector, this.template);
//     }

//     #createTemplate() {
//         let template = `
//         <h2>${this.selectedHero.name.toUpperCase()} Detail</h2>
//         <div>
//         <span>id: </span>${this.heroId}
//          </div>
//         `;
//         template += `
//     <div>
//     <label for="hero-name">Hero name: </label>
//     <input id="hero-name" placeholder="Hero-name/>
//     </div>
//     <button (click)= "goBack()">go back</button>
//     <button (click)= "save()>save</button>
//     `;
//         return template;
//     }
// }
