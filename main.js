var letsCookButton = document.querySelector('.button');
var sideDishRadio = document.querySelector('.side-dish-radio');
var mainDishRadio = document.querySelector('.main-dish-radio');
var dessertRadio = document.querySelector('.desserts-radio');
var potImage = document.querySelector('img')
// var recipeBox = document.querySelector('.recipe-box')
var makeDish = document.querySelector('.hidden-text');
var recipeBox = document.querySelector('.recipe');
var loading = document.querySelector('.loader')

letsCookButton.addEventListener('click', letsCook)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function letsCook() {
  console.log("when hidden:", makeDish)
  potImage.classList.add('hidden');
  loading.classList.remove('hidden')
  if (sideDishRadio.checked) {
    recipeBox.innerText = 'You should make:'
    makeDish.innerText = sideDishes[getRandomIndex(sideDishes)];
  } else if (dessertRadio.checked) {
    recipeBox.innerHTML = 'You should make:'
    makeDish.innerText = desserts[getRandomIndex(desserts)];
  } else {
    recipeBox.innerHTML = 'You should make:'
    makeDish.innerText = mainDishes[getRandomIndex(mainDishes)];
  }
}

function loadingWave() {

}






    



