import * as Helpers from './helpers.js';
import ContactPlate from './platillo5.jpg';

function createContactPage() {
  const contactPage = document.createElement('div');
  contactPage.classList.add('contact-page');

  contactPage.appendChild(createContactBanner());
  contactPage.appendChild(createContactMain())
  return contactPage;
}

function createContactBanner() {
  const text = document.createElement('div');
  text.classList.add('banner-text');
  text.appendChild(Helpers.createTitle('Contact Us'))
  return Helpers.createBanner(ContactPlate, text);
}

function createContactMain() {
  const main = document.createElement('main');
  main.classList.add('contact-main');
  main.appendChild(createCard('Get In Touch', 'The Eagle', '801 West Georgia Street\nVancouver, BC V6C 1P7\nTelephone: 604 673 7000\nEmail: info@eaglerestaurant.com'))
  return main;
}

function createCard(title, subTitle, content) {
  const cardTitle = document.createElement('p');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = title;

  const cardSubTitle = document.createElement('p');
  cardSubTitle.classList.add('card-sub-title');
  cardSubTitle.textContent = subTitle;

  const cardContent = document.createElement('p');
  cardContent.classList.add('card-content');
  cardContent.textContent = content;

  const card = document.createElement('div');
  card.classList.add('contact-card');
  card.appendChild(cardTitle);
  card.appendChild(cardSubTitle);
  card.appendChild(cardContent);
  
  return card;
}


export default createContactPage;