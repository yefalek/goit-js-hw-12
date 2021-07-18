export const fetchCountries = (name) => {
    const BASE_URL = 'https://restcountries.eu';
    const PARAMETRES ='?fields=name;capital;population;flag;languages'
    return fetch(`${BASE_URL}/rest/v2/name/${name}${PARAMETRES}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
      }
      return response.json();
      })
  }