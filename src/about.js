import * as Helpers from './helpers';
import AboutPlate from './ratatouille.jpg';

function createAbout() {
  const about = document.createElement('div');
  about.classList.add('about-page');

  about.appendChild(createAboutBanner());
  about.appendChild(createAboutMain());
  return about;
}
// function createHomeBanner() {
//   const text = document.createElement('div');
//   text.classList.add('banner-text');
//   text.appendChild(createTitle());
//   text.appendChild(createHeadline());
//   const banner = Helpers.createBanner(HomePlate, text);
//   return banner;
// }

// function createHomeMain() {
//   const main = document.createElement('main');
//   main.classList.add('home-main');
//   main.appendChild(createDescription());
//   main.appendChild(createDescription());
//   return main;
// }

function createAboutBanner() {
  const text = document.createElement('div');
  text.classList.add('banner-text');
}

function createTitle() {
  const title = document.createElement('h1');
  title.textContent = 'The Eagle\'s den';
  title.classList.add('title');
  return title;
}

function createAboutText() {
  
}

export default createAbout;