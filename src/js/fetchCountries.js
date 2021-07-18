export const fetchCountries = (name) => {
    const source = 'https://restcountries.eu';
    const param ='?fields=name;capital;population;flag;languages'
    return fetch(`${source}/rest/v2/name/${name}${param}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
      }
      return response.json();
      })
  }