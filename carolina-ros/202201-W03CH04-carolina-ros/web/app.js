const app = async function () {
  const askData = function () {
    const url = 'http://localhost:3000/series';

    const data = fetch(url)
      .then((information) => {
        //console.log(information);

        return information.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return 'Error', err.message;
      });
    return data;
  };

  const fetchedData = await askData();
  console.log(fetchedData);

  let template = '';
  template += `<h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have 4 series pending to watch</p> 
          `;

  if (item.watched === false) {
    fetchedData.forEach((item) => {
      template += `   
    <ul class="series-list"> 
            <li class="serie">
              <img class="serie__poster"
                src=${item.poster}
                alt="The Sopranos poster" />
              <h4 class="serie__title">${item.name}</h4>
              <p class="serie__info">${item.creator} ${item.year}</p>
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
              <i class="fas fa-times-circle icon--delete"></i>
            </li>
    `;
      template += `</ul></section>`;
    });
  } else if (item.watched === true) {
    fetchedData.forEach((item) => {
      template += `<section class="series-watched">
          <h3 class="subsection-title">Watched series</h3>
          <p class="info">You have watched 4 series</p>
          <!--<p class="info">You already have not watched any serie</p>-->
          <ul class="series-list series-list--watched">
            <li class="serie">
              <img class="serie__poster"
                src=${item.poster}
                alt="The Sopranos poster" />
              <h4 class="serie__title">${item.name}</h4>
              <p class="serie__info">${item.creator} ${item.year}</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon-score far fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>
            
    `;
      template += `</ul></section>`;
    });
  }
  document.querySelector('.series').innerHTML += template;
};

document.addEventListener('DOMContentLoaded', app);

/*const showTitles = function (urlImage) {
    document.querySelector('#getInfo').innerHTML = `

        <img src="${urlImage}" alt="Image Sample">
        `;
  };
  document.querySelector('button').addEventListener('click', askData);
  return data;
};*/
