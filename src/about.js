import * as Helpers from './helpers';
import AboutPlate from './platillo6.jpg';

function createAbout() {
  const about = document.createElement('div');
  about.classList.add('about-page');

  about.appendChild(createAboutBanner());
  about.appendChild(createAboutMain());
  return about;
}

function createAboutBanner() {
  const text = document.createElement('div');
  text.classList.add('banner-text');
  text.appendChild(Helpers.createTitle('About Us'));
  return Helpers.createBanner(AboutPlate, text);
}

function createAboutMain() {
  const main = document.createElement('main');
  main.classList.add('home-main');
  const p1 = document.createElement('p');
  p1.textContent = Helpers.createDummyText();
  const p2 = document.createElement('p');
  p2.textContent = Helpers.createDummyText();
  main.appendChild(p1);
  main.appendChild(p2);
  return main;
}

export default createAbout;