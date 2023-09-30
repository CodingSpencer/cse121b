/* W02-Task - Profile Home Page */
let fullName = 'Spencer Ashcraft';
let foods = ['Cream Puffs', 'Pizza', "S'More Cereal", 'Apples'];
let foodsAsString = foods.join(', ');
let currentYear = 2023;
let profilePic = new Image();
profilePic.src = 'resume_picture.jpg';

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', 'images/resume_picture.jpg');
imageElement.setAttribute('alt', `Profile image of ${fullName}`);
foodElement.innerHTML = `${foodsAsString}`;

let food = 'Egg Sandwiches';
foods.push(food);
foodsAsString = foods.join(', ');
foodElement.innerHTML += `<br>${foodsAsString}`;
foods.shift();
foodsAsString = foods.join(', ');
foodElement.innerHTML += `<br>${foodsAsString}`;
foods.pop();
foodsAsString = foods.join(', ');
foodElement.innerHTML += `<br>${foodsAsString}`;


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */




/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






