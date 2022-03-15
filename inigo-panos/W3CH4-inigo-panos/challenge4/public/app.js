const app = async () => {
  const askData = async () => {
    const url = ' http://localhost:3000/series';
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  const totalSeries = await fetchData();
  // aqui hay dos arrays para series vistas y no vistas

  totalSeries.forEach((serie) => {
    serie.watched ? watched.push(series) : pendingSeries.push(serie);
  });
};

document.addEventListener('DOMContentLoaded', app); //Si no se pone esto no funciona el DOM!
