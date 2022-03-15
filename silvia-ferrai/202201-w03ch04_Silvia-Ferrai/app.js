const app = async function () {
    const askInfo = function () {
        const url = 'http://localhost:3000/series';

        return fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                return data;
            });
    };

    const newData = await askInfo();
    console.log(newData.length);
    let template = '';
    template += `
               <h3 class="subsection-title">Pending series</h3>
                        <p class="info">You have  series pending to watch</p>`;

    newData.forEach((item) => {
        if (item.watched === false) {
            template += ` 
    <li class="serie">
        <img
            class="serie__poster"
            src="${item.poster}"
            alt="The Sopranos poster"
        />
        <h4 class="serie__title">${item.name}</h4>
        <p class="serie__info">${item.creator}  (${item.year})</p>
        <ul class="score">
            <li class="score__star">
                <i
                    class="icon--score far fa-star"
                    title="1/5"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score far fa-star"
                    title="2/5"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score far fa-star"
                    title="3/5"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score far fa-star"
                    title="4/5"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score far fa-star"
                    title="5/5"
                ></i>
            </li>
        </ul>
        <i class="fas fa-times-circle icon--delete"></i>
    </li>
            `;
        }
    });

    template += ` <h3 class="subsection-title">Watched series</h3>
                        <p class="info">You have watched 4 series</p>
                     `;
    newData.forEach((item) => {
        if (item.watched === true) {
            template += `
        <li class="serie">
        <img
            class="serie__poster"
            src="${item.poster}"
            alt="The Sopranos poster"
        />
        <h4 class="serie__title">${item.name}</h4>
        <p class="serie__info">${item.creator}  (${item.year})</p>
        <ul class="score">
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="1/5"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="2/5"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="3/5"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="4/5"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="5/5"
                ></i>
            </li>
        </ul>
        <i class="fas fa-times-circle icon--delete"></i>
    </li>
    
            `;
        }
    });

    document.querySelector('.series-pending').innerHTML = template;
};

document.addEventListener('DOMContentLoaded', app);
