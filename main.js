let allCards = []; // Array for storing all initially fetched data. See the init function to see how this is populated

const renderCards = (dataArray) => {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.textContent = "";

    dataArray.forEach((cardInfo) => {
        const cardWrapper = document.createElement("div");
        cardWrapper.className = "card-wrapper";

        const img = document.createElement("img");
        img.className = "card-img";
        img.alt = `${cardInfo.name} image`;
        img.src = cardInfo.image;

        cardWrapper.appendChild(img);

        img.addEventListener("dblclick", (event) => {
            const pName = document.createElement("p");
            pName.textContent = cardInfo.name;
            console.log(pName);
        });

        cardsContainer.appendChild(cardWrapper);
    });
};

const fetchData = (category = "") => { // This function returns a fetch. Any call to this function will need to handle the returned <Promise> by using a .then() - fetchData().then(data => console.log(data))
    return fetch(`https://botw-compendium.herokuapp.com/api/v2${category}`)
        .then(function (response) {
            return response.json(); // The callback function that is passed to .then() needs to return a value. This code is equivalent to .then(response => response.json())
        })
        .then(function (info) {
            return info.data;
        });
};

const addEventListenerToNavLinks = () => {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            const filteredCards = allCards.filter((card) => {  // Filter allCards based on the nav link text that was clicked
                return card.category.toLowerCase() === e.target.textContent.toLowerCase()
            });
            renderCards(filteredCards) // Render the filtered cards array that we created
        });
    });
};

const init = () => {
    addEventListenerToNavLinks(); // add event listeners

    fetchData().then(function (data) { // Send initial fetch for data
        Object.keys(data).forEach((key) => {
            if (typeof data[key] === "Array") {        // If data[key] points to an array, then add that array to allCards 
                allCards = [...allCards, ...data[key]];
            } else {                                   // Otherwise, data[key] is an object that has top level keys that point to arrays. Grab all of the object's values (arrays) and combine them (.flat() )
                allCards = [...allCards, ...Object.values(data[key]).flat()]; // .flat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
            }
            renderCards(allCards);
        });
    });
};

init(); // Initializer function - handles all initial calls to functions that fetch data, populate the DOM and adds event listeners