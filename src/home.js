import * as Helpers from './helpers.js';
import HomePlate from './platillo1_cropped.jpg';

function createHome() {
  const home = document.createElement('div');
  home.classList.add('home-page');

  home.appendChild(createHomeBanner());
  home.appendChild(createHomeMain());
  return home;
}

function createHomeBanner() {
  const text = document.createElement('div');
  text.classList.add('banner-text');
  text.appendChild(Helpers.createTitle('The Eagle'));
  text.appendChild(createHeadline());
  return Helpers.createBanner(HomePlate, text);
}

function createHomeMain() {
  const main = document.createElement('main');
  main.classList.add('home-main');
  main.appendChild(createDescription());
  main.appendChild(createDescription());
  return main;
}

function createHeadline() {
  const headline = document.createElement('h2');
  headline.textContent = 'Where delightful flavors are born';
  headline.classList.add('headline');
  return headline;
}

function createDescription() {
  const description = document.createElement('p');
  description.textContent = Helpers.createDummyText();
  return description;
}

export default createHome;