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
  nav.appendChild(createBrandLink())
  nav.appendChild(createMenuLink())
  nav.appendChild(createContactLink())
  nav.innerHTML = 
        `<a href="#home" class="home-link active">Home</a>
        <a href="#" class="about-link">About Us</a>
        <a href="#home" class="brand-link">
          <div class="brand"></div>
        </a>
        <a href="#" class="menu-link">Menu</a>
        <a href="#" class="contact-link">Contact Us</a>
        <button class="burger-icon">
          <i class="fa fa-bars"></i>
        </button>`;
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
  aboutLink.textContent = 'About us'
  aboutLink.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    aboutLink.classList.add('active')
    loadAbout();
  })
}

function createBrandLink() {
  const brandLink = document.createElement('a');
  brandLink
}

function createMenuLink() {

}

function createContactLink() {

}

function createLogo() {
  const img = new Image();
  img.src = Logo;
  img.classList.add('logo');
  return img;
}

document.body.prepend(createNavBar());
const brand = document.querySelector('.brand');
brand.appendChild(createLogo());

const content = document.querySelector('#content');
content.appendChild(loadHome());