import { component } from './component.js';

export class List extends component{
    template;
    
    constructor(){
        super();
        this.heros = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }];
        this.template = this.generateTemplate();
        this.render('#heros');
        
        
    }
    generateTemplate(){
        let template = `
        <div id="heroes-list">
            <ul>
            `
            this.heros.forEach(item => {
                template += `<li><div><a href=""><span>${item.id}</span><span>${item.name}</span></a></div></li>`
            })
            template += 
            
            `</ul>
            </div>`;

        return template;
    }
}