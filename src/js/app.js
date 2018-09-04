const Cards = document.querySelectorAll('.Card');

Cards.forEach( elem => {
  elem.addEventListener('click', () => {
    elem.classList.toggle('on')
  })
});