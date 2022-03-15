const app = async function () {
  // const getInformation = function () {
  //   const url = 'http://localhost:3000/series';

  //   const data = fetch(url)
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((data) => {
  //       return data;

  //     });

  // //   return data;
  // };

  const getInformation = async function () {
    const url = 'http://localhost:3000/series';

    const resp = await fetch(url);

    const data2 = await resp.json();

    return data2;
  };

  const allSeries = await getInformation();
  console.log(allSeries);
};
document.addEventListener('DOMContentLoaded', app);
