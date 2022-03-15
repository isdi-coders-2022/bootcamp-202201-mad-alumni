const app = async function () {
    const askData = function () {
        const url = 'http://localhost:3000/series';
        return fetch(url)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                return data;
            });
    };
    const newData = await askData();

    let template = '';
    template += `<li class="serie">`;
    newData.forEach((element) => {
        if (element.watched === false) {
            template += `<img
                class="serie__poster"
                src="${element.poster}"
                alt="${element.name} poster"
            />
            <h4 class="serie__title">${element.name}</h4>
            <p class="serie__info">${element.creator}, ${element.year}</p>
            <ul class="score">
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
            <li class="${element.score}">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
        </ul>
        <i class="fas fa-times-circle icon--delete"></i>
    </li>`;
        } else {
            template += `<img
                class="serie__poster"
                src="${element.poster}"
                alt="${element.name} poster"
            />
            <h4 class="serie__title">${element.name}</h4>
            <p class="serie__info">${element.creator}, ${element.year}</p>
            <ul class="score">
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
            <li class="score__star">
                <i
                    class="icon--score fas fa-star"
                    title="${element.score}"
                ></i>
            </li>
        </ul>
        <i class="fas fa-times-circle icon--delete"></i>
    </li>`;
        }
    });
    document.querySelector('.series').outerHTML = template;
};

document.addEventListener('DOMContentLoaded', app);
