import Logo from './eagle.png'
import HomePlate from './gyoza.jpg'
import './style.css'

function loadLogo() {
  const img = new Image()
  img.src = Logo 
  img.classList.add('logo')
  return img
}

function loadHomePlate() {
  const img = new Image()
  img.src = HomePlate
  img.classList.add('home-plate')
  return img
}

function loadTitle() {
  const title = document.createElement('h1')
  title.textContent = 'La Guarida del Aguila'
  title.classList.add('title')
  return title
}

function loadHeadline() {
  const headline = document.createElement('h2')
  headline.textContent = 'El nido de la buena cocina'
  headline.classList.add('headline')
  return headline
}

function loadDescription() {
  const description = document.createElement('p')
  description.textContent = 'La Guarida del Aguila es un lugar con un ambiente calido y acogedor, con platillos sofisticados y de alta cocina. Es el lugar perfecto para una experiencia refrescante de sabores y sensaciones.'
  description.classList.add('description')
  return description
}

document.body.appendChild(loadHomePlate())

const brand = document.querySelector('.brand')
brand.appendChild(loadLogo())