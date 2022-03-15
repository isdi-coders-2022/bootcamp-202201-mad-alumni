async function app() {
    const pokeId = window.location.search.split('=')[1];
    console.log('App loaded');
    let index = 0;
    
    let URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/${pokeId}/`;
    
    const data = await initiatePoke();
    showData();

    console.log(data);
    
    async function initiatePoke() {
        const resp = await fetch(URL_POKEMON, {
            mode: 'cors',
        });
        return resp.json();
    }
    console.log(data);
    console.log(data.name);
    console.log(data.sprites.back_default);
    async function showData(data) {
        
        console.log(data);
        
        console.log(index);
        let template = '';
        template += `
                <h2>${data.name}</h2>
                <img src="${data.sprites.back_default}">`
        data.forEach((item) => {
            console.log(item)
           template += `
                <h2>${item.name}</h2>
                <img src="${item.sprites.back_default}">
                
            `;
            
        });
        document.querySelector('.detalle').innerHTML = template;
    }

} 
document.addEventListener('DOMContentLoaded', app);   