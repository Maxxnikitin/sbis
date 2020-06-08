const buttonClientsOpened = document.querySelector('.clients__button');
const buttonMenu = document.querySelector('.menu__button');
const clientsHidden = document.querySelector('.clients__hidden');
const headerMenu = document.querySelector('.header-menu');

function changeClientsReviews () {
  clientsHidden.classList.toggle('clients__hidden_opened');
}

function changeHeaderMenu () {
  headerMenu.classList.toggle('header-menu_opened');
}

buttonClientsOpened.addEventListener('click', changeClientsReviews);
buttonMenu.addEventListener('click', changeHeaderMenu);