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

function createImgWithText(imgSrc, textElement) {
  const container = document.createElement('div')
  container.classList.add('container')

  const img = new Image()
  img.src = imgSrc
  img.classList.add('home-plate')

  const overlay = document.createElement('div')
  overlay.classList.add('overlay')

  container.appendChild(img)
  container.appendChild(overlay)
  container.appendChild(textElement)
  return container
}

function createTitle() {
  const title = document.createElement('h1')
  title.textContent = 'The Eagle\'s den'
  title.classList.add('title')
  return title
}

function createHeadline() {
  const headline = document.createElement('h2')
  headline.textContent = 'Where delightful flavors are born'
  headline.classList.add('headline')
  return headline
}

function createDescription() {
  const description = document.createElement('p')
  description.textContent = 'La Guarida del Aguila es un lugar con un ambiente calido y acogedor, con platillos sofisticados y de alta cocina. Es el lugar perfecto para una experiencia refrescante de sabores y sensaciones.'
  description.classList.add('description')
  return description
}

function createDiv(cssClass, ...elements) {
  const div = document.createElement('div')
  if (cssClass) {
    div.classList.add(cssClass)
  }
  for (let el of elements) {
    div.appendChild(el)
  }
  return div
}

document.body.prepend(createNavBar())
const brand = document.querySelector('.brand')
brand.appendChild(createLogo())

const content = document.querySelector('#content')
content.appendChild(createImgWithText(HomePlate, createDiv('title-text', createTitle(), createHeadline())))