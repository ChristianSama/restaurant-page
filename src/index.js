import Logo from './eagle.png'
import HomePlate from './platillo1_cropped.jpg'
import './style.css'

function createNavBar() {
  const nav = document.createElement('nav')
  nav.innerHTML = 
    `<ul>
      <li>
        HOME
      </li>
      <li>
        ABOUT
      </li>
      <li>
        <div class="brand"></div>
      </li>
      <li>
        MENU
      </li>
      <li>
        CONTACT US
      </li>
    </ul>`
  return nav
}

function createLogo() {
  const img = new Image()
  img.src = Logo 
  img.classList.add('logo')
  return img
}

function createHomeImg() {
  const img = new Image()
  img.src = HomePlate
  img.classList.add('home-plate')
  return img
}

function createTitle() {
  const title = document.createElement('h1')
  title.textContent = 'La Guarida del Aguila'
  title.classList.add('title')
  return title
}

function createHeadline() {
  const headline = document.createElement('h2')
  headline.textContent = 'El nido de la buena cocina'
  headline.classList.add('headline')
  return headline
}

function createDescription() {
  const description = document.createElement('p')
  description.textContent = 'La Guarida del Aguila es un lugar con un ambiente calido y acogedor, con platillos sofisticados y de alta cocina. Es el lugar perfecto para una experiencia refrescante de sabores y sensaciones.'
  description.classList.add('description')
  return description
}

document.body.prepend(createNavBar())

const content = document.querySelector('#content')
content.appendChild(createHomeImg())

const brand = document.querySelector('.brand')
brand.appendChild(createLogo())