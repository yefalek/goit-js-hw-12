export const fetchCountries = (name) => {
    const source = 'https://restcountries.eu';
    const PARAMETRES ='?fields=name;capital;population;flag;languages'
    return fetch(`${source}/rest/v2/name/${name}${PARAMETRES}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
      }
      return response.json();
      })
  }