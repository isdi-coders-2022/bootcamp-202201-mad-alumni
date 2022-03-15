const app = function () {
    const askData = function app() {
        const url = 'http://localhost:3000/series';
        console.log('Asking data');
        fetch(url)
            .then((resp) => {
                //console.log(resp);

                if (!resp.ok) {
                    throw new Error(resp.status);
                }

                return resp.json();
            })
            .then((data) => {
                console.log(data);
                showPending(data);
                showWatched(data);
            })
            .catch((err) => {
                console.log('Error', err.message);
            });
    };

    function showPending(data) {
        const template1 = `
                        <h3 class="subsection-title">Pending series</h3>
                        <p class="info">You have ${data.length} series pending to watch</p>`;
        document.querySelector('.series-pending').innerHTML += template1;

        data.forEach((item) => {
            if (item.watched === false) {
                const template2 = `
                <ul class="series-list">
                    <li class="serie">
                                <img
                                    class="serie__poster"
                                    src="${item.poster}"
                                    alt="${item.name} poster"
                                />
                                <h4 class="serie__title">${item.name}</h4>
                                <p class="serie__info">${item.creator} (${item.year})</p>
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
                        </ul>`;

                console.log(item);

                document.querySelector('.series-pending').innerHTML +=
                    template2;
            }
        });

        //console.log(data);
    }

    function showWatched(data) {
        const template1 = `
                        <h3 class="subsection-title">Watched series</h3>
                        <p class="info">You have watched 4 series</p>`;
        document.querySelector('.series-pending').innerHTML += template1;

        data.forEach((item) => {
            if (item.watched === true) {
                const template2 = `
               <ul class="series-list series-list--watched">
                            <li class="serie">
                                <img
                                    class="serie__poster"
                                    src="${item.poster}"
                                    alt="${item.name} poster"
                                />
                                <h4 class="serie__title">${item.name}</h4>
                                <p class="serie__info">${item.creator} (${item.year})</p>
                                <ul class="score">
                                    <li class="score__star">
                                        <i
                                            class="icon-score far fa-star"
                                            title="1/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon-score far fa-star"
                                            title="2/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon-score far fa-star"
                                            title="3/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon-score far fa-star"
                                            title="4/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon-score far fa-star"
                                            title="5/5"
                                        ></i>
                                    </li>
                                </ul>
                                <i class="fas fa-times-circle icon--delete"></i>
                            </li>
                        </ul>`;

                console.log(item);

                document.querySelector('.series-watched').innerHTML +=
                    template2;
            }
        });

        //console.log(data);
    }

    //const showImage = function (urlImage) {
    //    document.querySelector('.image').innerHTML = `
    //    <img src="${urlImage}" alt="Image Sample">`;
    //};

    document.querySelector('button').addEventListener('click', askData);
};

document.addEventListener('DOMContentLoaded', app); //Si no se pone esto no funciona el DOM!
