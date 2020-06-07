const buttonClientsOpened = document.querySelector('.clients__button');
const clientsHidden = document.querySelector('.clients__hidden');

function openClientsReviews () {
  clientsHidden.classList.toggle('clients__hidden_opened');
}

buttonClientsOpened.addEventListener('click', openClientsReviews);