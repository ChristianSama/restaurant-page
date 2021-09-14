import HomePlate from './platillo1_cropped.jpg';

function createHome() {
  const home = document.createElement('div');
  home.classList.add('home-page');

  home.appendChild(createImgWithText(HomePlate, createDiv('title-text', createTitle(), createHeadline())));
  home.appendChild(createDiv('description-layout', createDescription(), createDescription()));
  return home;
}

function createImgWithText(imgSrc, textElement) {
  const container = document.createElement('div');
  container.classList.add('container');

  const img = new Image();
  img.src = imgSrc;
  img.classList.add('home-plate');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  container.appendChild(img);
  container.appendChild(overlay);
  container.appendChild(textElement);
  return container;
}

function createTitle() {
  const title = document.createElement('h1');
  title.textContent = 'The Eagle\'s den';
  title.classList.add('title');
  return title;
}

function createHeadline() {
  const headline = document.createElement('h2');
  headline.textContent = 'Where delightful flavors are born';
  headline.classList.add('headline');
  return headline;
}

function createDescription() {
  const description = document.createElement('p');
  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  description.classList.add('description');
  return description;
}

function createDiv(cssClass, ...elements) {
  const div = document.createElement('div');
  if (cssClass) {
    div.classList.add(cssClass);
  }
  for (let el of elements) {
    div.appendChild(el);
  }
  return div;
}

export default createHome;