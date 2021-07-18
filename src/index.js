import debounce from 'lodash.debounce';
import { Notify } from "notiflix";
import severalCards from './templates/severalCards.hbs';
import oneCard from './templates/oneCard.hbs';
import { fetchCountries } from "./js/fetchCountries";

import "./css/style.scss"

const DEBOUNCE_DELAY = 300;


const input = document.querySelector('[id="search-box"]');
const countryList = document.querySelector(".country-list");

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  const name = evt.target.value;

  if (name.trim() === "" ) {
    countryList.innerHTML = '';
    return;
  }

  fetchCountries(name).then(data => {
  
  if (data.length > 10 ) {
    Notify.info("Too many matches found. Please enter a more specific name.");
  
  }

  if (data.length === 1) {
  renderOneCard(data[0]);
  
  }

  if (data.length >= 2 && data.length <= 10) {
  renderSeveralCards({ data });
   }   
  })
  .catch(error => {
  Notify.failure("Oops, there is no country with that name");
  console.log('Error:', error)
  
  });

};

function renderOneCard(data) {
 const lang =data.languages.map(l => l.name).join(', ');
 const markup = oneCard({ data, lang });
 countryList.innerHTML = markup;

}


function renderSeveralCards(data) {
const markup = severalCards(data);
countryList.innerHTML = markup;

}