import Logo from './eagle.png';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Home from './home';
import About from './about';
import Menu from './menu';

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
    loadPage(Home());
    setActiveLink(homeLink)
  })
  return homeLink;
}

function createAboutLink() {
  const aboutLink = document.createElement('a');
  aboutLink.classList.add('about-link');
  aboutLink.textContent = 'About us';
  aboutLink.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    loadPage(About());
    setActiveLink(aboutLink);
  })
  return aboutLink;
}

function createMenuLink() {
  const menuLink = document.createElement('a');
  menuLink.classList.add('menu-link');
  menuLink.textContent = 'Menu';
  menuLink.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    loadPage(Menu());
    setActiveLink(menuLink);
  })
  return menuLink;
}

function createContactLink() {
  const contactLink = document.createElement('a');
  contactLink.classList.add('contact-link');
  contactLink.textContent = 'Contact us';
  contactLink.addEventListener('click', (e) => {
    if  (e.target.classLink.contains('active')) return;
    loadPage(Contact());
    setActiveLink(contactLink);
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

function clearPage() { 
  const content = document.querySelector('#content');
  content.innerHTML = '';
}

function loadPage(page) {
  clearPage();
  const content = document.querySelector('#content');
  content.appendChild(page);
}

function setActiveLink(link) {
  const links = document.querySelectorAll('nav a');
  for (let l of links) {
    l.classList.remove('active');
  }
  link.classList.add('active');
}

function buildPage() {
  document.body.prepend(createNavBar());
  loadPage(Home());
  setActiveLink(document.querySelector('.home-link'));
}

buildPage()

