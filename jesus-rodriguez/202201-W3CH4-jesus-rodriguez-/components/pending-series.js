import { Components } from '../components/components.js';

export class ListPending extends Components {
  template;
  constructor(allSeries) {
    super();
    this.template = this.createTemplate(allSeries);
    this.render('.series-pending');
  }

  createTemplate(allSeries) {
    let template = `<h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">`;

    allSeries.forEach((series) => {
      if (series.watched === false) {
        template += `
     
        <li class="serie">
                <img
                  class="serie__poster"
                  src="${series.poster}"
                  alt="The Sopranos poster"
                />
                <h4 class="serie__title">${series.name}</h4>
                <p class="serie__info">${series.actor} (${series.year})</p>
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
      }
    });

    template += `</ul>`;

    return template;
  }
}
