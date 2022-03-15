export const getInformation = async function (link) {
  const resp = await fetch(link);

  const allPromise = await resp.json();

  return allPromise;
};
