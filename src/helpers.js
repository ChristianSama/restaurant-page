function createBanner(imgSrc, textElement) {
  const banner = document.createElement('div');
  banner.classList.add('banner');

  const img = new Image();
  img.src = imgSrc;
  img.classList.add('image');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  banner.appendChild(img);
  banner.appendChild(overlay);
  banner.appendChild(textElement);
  return banner;
}

function createDummyText() {
  return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
}

function createTitle(text) {
  const title = document.createElement('h1');
  title.textContent = text;
  title.classList.add('title');
  return title;
}

export {createBanner, createDummyText};