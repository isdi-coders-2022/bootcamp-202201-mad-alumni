import { Component } from './component.js';
export class Search extends Component {
    template;
    constructor(placeholder = 'Enter Hero') {
        super();
        this.template = `  <label _ngcontent-ouy-c48="" for="search-box">Hero Search</label>
        <input _ngcontent-ouy-c48="" id="search-box" placeholder="${placeholder}" />
        <ul _ngcontent-ouy-c48="" class="search-result"></ul>`;
    }
}
