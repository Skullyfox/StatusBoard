const Cards = document.querySelectorAll('.Card');

Cards.forEach( elem => {
  elem.addEventListener('click', () => {
    elem.classList.toggle('on');
    elem.classList.contains('on') 
      ? elem.querySelector('.CardStatus').innerText = "On" 
      : elem.querySelector('.CardStatus').innerText = "Off";
  })
});