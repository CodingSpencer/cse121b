/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Spencer Ashcraft",
    photo: "images/resume_picture.jpg",
    favoriteFoods: ['Cream Puffs', 'Pizza', "S'More Cereal", 'Apples'],
    hobbies: ['Pickeball', 'Longboarding', 'Disc Golf', 'Running'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Salem, UT',
        length: '9 years'
    },
    {
        place: 'Marana, AZ',
        length: '10 years'
    }
);



/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

let picture = document.querySelector("#photo");
picture.src = myProfile.photo;

let ulElement = document.querySelector("#favorite-foods");
myProfile.favoriteFoods.forEach(function(food) {
    let element = document.createElement("li");

    element.textContent = food;

    ulElement.appendChild(element);
});

let hobbies = document.querySelector("#hobbies");
myProfile.hobbies.forEach(function(hobby) {
    let activity = document.createElement("li");

    activity.textContent = hobby;

    hobbies.appendChild(activity);
});

let places = document.querySelector("#places-lived");
myProfile.placesLived.forEach(function(placeInfo) {
    let dtElement = document.createElement("dt");
    dtElement.textContent = placeInfo.place;

    let ddElement = document.createElement("dd");
    ddElement.textContent = placeInfo.length;

    places.appendChild(dtElement);
    places.appendChild(ddElement);
});


/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


