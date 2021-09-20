import * as Helpers from './helpers.js';
import MenuPlate from './platillo2.jpg';
import Platillo3 from './platillo3.jpg';
import Platillo4 from './platillo4.jpg';


function createMenuPage() {
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page');

  menuPage.appendChild(createMenuBanner());
  menuPage.appendChild(createMenu());

  return menuPage;
}

function createMenuBanner() {
  const text = document.createElement('div');
  text.classList.add('banner-text');
  text.appendChild(Helpers.createTitle('Menu'));
  return Helpers.createBanner(MenuPlate, text);
}

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.appendChild(createDish(Platillo3, 'Confit de canard', Helpers.createDummyText(), '15.00'));
  menu.appendChild(createDish(Platillo4, 'Coq au vin', Helpers.createDummyText(), '15.00'));
  return menu;
}


function createDish(url, name, text, price) { 
  const image = new Image();
  image.src = url;

  const dishName = document.createElement('p');
  dishName.classList.add('dish-name');
  dishName.textContent = name; 

  const description = document.createElement('p');
  description.classList.add('dish-description');
  description.textContent = text;

  const pricePara = document.createElement('p');
  pricePara.classList.add('dish-price');
  pricePara.textContent = '$' + price;
  
  const container = document.createElement('div');
  container.appendChild(dishName);
  container.appendChild(description);
  container.appendChild(pricePara);

  const dish = document.createElement('div');
  dish.classList.add('dish');
  dish.appendChild(image);
  dish.appendChild(container);

  return dish;
}

export default createMenuPage;