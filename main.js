var letsCookButton = document.querySelector('.button');
var sideDishRadio = document.querySelector('.side-dish-radio');
var mainDishRadio = document.querySelector('.main-dish-radio');
var dessertRadio = document.querySelector('.desserts-radio');
var potImage = document.querySelector('img')
var makeDish = document.querySelector('.suggested-meal');
var suggestionBox = document.querySelector('.you-should-make');
var loading = document.querySelector('.loader-container')

letsCookButton.addEventListener('click', letsCook)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function letsCook() {
  loading.classList.remove('hidden');
  potImage.classList.add('hidden');
  suggestionBox.innerText = '';
  makeDish.innerText = '';
  
  setTimeout(function() {
  
    if (sideDishRadio.checked) {
      suggestionBox.innerText = 'You should make:'
      makeDish.innerText = sideDishes[getRandomIndex(sideDishes)];
    } else if (dessertRadio.checked) {
      suggestionBox.innerHTML = 'You should make:'
      makeDish.innerText = desserts[getRandomIndex(desserts)];
    } else {
      suggestionBox.innerHTML = 'You should make:'
      makeDish.innerText = mainDishes[getRandomIndex(mainDishes)];
    }
    loading.classList.add('hidden')

  }, 1000 );
}

setTimeout(function() {
  var make = document.getElementById('make');
  make.style.opacity = 1;
}, 2000);

setTimeout(function() {
  var suggestion = document.getElementById('suggestion');
  suggestion.style.opacity = 1;
}, 2000);


    



