/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach((temple) => {
        const artElement = document.createElement('article');
        const h3Element = document.createElement('h3');

        h3Element.textContent = temple.templeName;
        artElement.appendChild(h3Element);

        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        artElement.appendChild(imgElement);

        templesElement.appendChild(artElement);
    });
}

const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
    }
    displayTemples(templeList);
};

const reset = () => {
    const list = templesElement.querySelectorAll('article');
    
    list.forEach((article) => {
        templesElement.removeChild(article);
    });
};




/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */
function sortBy(templeList) {
    reset();
    const filter = document.getElementById('sortBy').value;
    let filteredTemples;
    switch (filter) {
        case 'utah':
            filteredTemples = templeList.filter(temple => temple.location.includes("Utah"));
            displayTemples(filteredTemples);
            break;
        case 'notutah':
            filteredTemples = templeList.filter(temple => !temple.location.includes("Utah"));
            displayTemples(filteredTemples);
            break;
        case 'older':
            filteredTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(filteredTemples);
            break;
        case 'all':
            filteredTemples = templeList;
            displayTemples(filteredTemples);
            break;
    }
}


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => { sortBy(templeList) });

getTemples();