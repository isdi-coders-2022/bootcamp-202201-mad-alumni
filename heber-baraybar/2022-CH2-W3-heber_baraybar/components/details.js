// import { HEROES } from '../heroes-array.js';
import { Component } from './component.js';

export class Detail extends Component {
  template;
  constructor(title = 'Details', titleInput = 'Hero name') {
    super();
    this.template = `
    <div>
    <h2>${title}</h2>
    <div>
    <span>id<span>
    </div>
    <div<
    <label>${titleInput}</label>
    <input>
    </div>
    <button>Go Back</button>
    <button>Save</button>
    </div>`;
  }
}

//     `
// //     this.heroId = Number(location.search.split('=')[1]);
// //     this.selectedHero = HEROES.find((item) => item.id === this.heroId);
// //     this.template = this.createTemplate();
// //     this.render(selector, this.template);
// //   }
// //   createTemplate() {}
// // }
