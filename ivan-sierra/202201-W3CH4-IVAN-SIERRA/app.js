const app = function(){

    const askData = function() {
        const url = 'http://localhost:3000/series';
        
        fetch(url).then(resp => {
            console.log(resp);
            
            return resp.json();
        }).then((data) => {
            console.log(data);
            showData(data);
        })
        
    };


    const showData = function(data){
        data.forEach(item => {
            template = `
            <ul class="series-list">
              <li class="serie">
                <!--<img
                  class="serie__poster"
                  src="${item.poster}"
                  alt="${item.name} poster"
                />
                <h4 class="serie__title">${item.name}</h4>
                <p class="serie__info">${item.creator} ${item.year}</p>-->
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
            
        `
        return template;
    });
        document.querySelector('.serie').innerHTML += template;
        
    }
    

    document.querySelector('button').addEventListener('click', askData); 
};

document.addEventListener('DOMContentLoaded', app);