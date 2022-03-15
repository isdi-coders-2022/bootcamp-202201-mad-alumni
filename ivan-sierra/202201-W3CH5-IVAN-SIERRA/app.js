async function app() {
    console.log('App loaded');
    let index = 0;
    
    let URL_POKEMON = `https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=20`;
    const data = await initiatePoke();
    showCount(data);
    showData(data);
    
    
    async function initiatePoke() {
        const resp = await fetch(URL_POKEMON, {
            mode: 'cors',
        });
        return resp.json();
    }
    async function showCount(){
        const pokemonTotales = 1118;
        let template = '';
        console.log(pokemonTotales);
        
            template +=`<p>${index} / ${pokemonTotales} </p>
            `;
        
        document.querySelector('.cantidad').innerHTML = template;
    }
async function showData(data) {
        
        console.log(data);
        
        console.log(index);
        let template = '';
        data.results.forEach((item) => {
            let pokeUrl = item.url;
            let id = pokeUrl.split('/')[6];
            console.log(id);
            console.log(item.url);
           template += `
                <li class="pokemon"><a href="detail.html?id=${id}">${item.name}</a></li>
            `;
            
        });
        document.querySelector('.pokemonList').innerHTML = template;
    }
    async function botonPrevius(){
       console.log("Atras");
       if(index === 0){
           index = 0;      
         }else{
             index -= 20;
         }
       
       URL_POKEMON = `https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=20`;
       let data = await initiatePoke();
       showData(data);
       showCount(index);
    }
    async function botonNext(){
        console.log("siguiente");
        
        index += 20;
       URL_POKEMON = `https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=20`;
       let data = await initiatePoke();
       showData(data);
       showCount(index);
    }
    
    
    document.querySelector('.anterior').addEventListener('click',botonPrevius);
    document.querySelector('.siguiente').addEventListener('click',botonNext);
    
}
document.addEventListener('DOMContentLoaded', app);