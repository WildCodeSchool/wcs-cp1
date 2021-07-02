const items = document.getElementsByClassName("avatar");
const nbSlide = items.length;
let count = 0;

function slideSuivante() {
  items[count].classList.remove('active');
  
  if(count < nbSlide - 1) {
      count++;
  }

    else {
      count = 0;
  }


items[count].classList.add('active'); 
}

function slidePrecedente() {
  items[count].classList.remove('active');
  
  if(count > 0) {
      count--;
  }

    else {
      count = nbSlide -1;
  }
}