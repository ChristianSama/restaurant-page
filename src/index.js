import Logo from './eagle.png';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import loadHome from './home';
import createHome from './home';

function createNavBar() {
  const nav = document.createElement('nav');
  nav.appendChild(createHomeLink());
  nav.appendChild(createAboutLink());
  nav.appendChild(createBrandLink());
  nav.appendChild(createMenuLink());
  nav.appendChild(createContactLink());
  nav.appendChild(createExpandButton());
  return nav;
}

function createHomeLink() {
  const homeLink = document.createElement('a');
  homeLink.classList.add('home-link');
  homeLink.textContent = 'Home';
  homeLink.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    homeLink.classList.add('active');
    loadHome();
  })
  return homeLink;
}

function createAboutLink() {
  const aboutLink = document.createElement('a');
  aboutLink.classList.add('about-link');
  aboutLink.textContent = 'About us';
  aboutLink.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    aboutLink.classList.add('active');
    loadAbout();
  })
  return aboutLink;
}

function createMenuLink() {
  const menuLink = document.createElement('a');
  menuLink.classList.add('menu-link');
  menuLink.textContent = 'Menu';
  menuLink.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    menuLink.classList.add('active');
    loadMenu();
  })
  return menuLink;
}

function createContactLink() {
  const contactLink = document.createElement('a');
  contactLink.classList.add('contact-link');
  contactLink.textContent = 'Contact us';
  contactLink.addEventListener('click', (e) => {
    if  (e.target.classLink.contains('active')) return;
    contactLink.classList.add('active');
    loadContact();
  })
  return contactLink;
}

function createBrandLink() {
  const brandLink = document.createElement('a');
  brandLink.classList.add('brand-link');
  brandLink.appendChild(createLogo());
  return brandLink;
}

function createLogo() {
  const img = new Image();
  img.src = Logo;
  img.classList.add('logo');
  return img;
}

function createExpandButton() {
  const button = document.createElement('button');
  button.classList.add('burger-icon');
  button.innerHTML = '<i class="fa fa-bars"></i>';
  return button;
}

function buildPage() {
  document.body.prepend(createNavBar());
  const content = document.querySelector('#content');
  content.appendChild(loadHome());
}

buildPage()
