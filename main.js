// let hyruleData;

// document.addEventListener("DOMContentLoaded", () => {
//     fetchData();
// });

// const input = document.querySelector("#search-food");
// input.addEventListener("input", function (e) {
//     const filteredFoods = hyruleData.food.filter(({ name, description }) =>
//         name.includes(e.target.value) || description.includes(e.target.value)
//     );
//     renderFoodCards(filteredFoods, "food-cards");
// });

// async function fetchData() {
//     const resp = await fetch("https://botw-compendium.herokuapp.com/api/v2/all");
//     const { data } = await resp.json();
//     const { creatures, equipment, materials, monsters } = data;
//     const { food, non_food } = creatures;
//     hyruleData = {
//         equipment,
//         materials,
//         monsters,
//         food,
//         non_food,
//     };
//     renderFoodCards(food, "food-cards");
// }

// function renderFoodCards(data, id) {
//     console.log(data);
//     const cardContainer = idEl(id);
//     cardContainer.textContent = "";
//     console.log(cardContainer);
//     data.forEach((el) => {
//         const card = document.createElement("div");
//         card.classList = "card";
//         card.style = "width: 18rem; margin: 20px";

//         const img = document.createElement("img");
//         img.src = el.image;
//         img.className = "card-img-top";
//         img.alt = el.name;

//         const cardBody1 = document.createElement("div");
//         cardBody1.className = "card-body";

//         const h5 = document.createElement("h5");
//         h5.className = "card-title";
//         h5.textContent = el.name;

//         const p1 = document.createElement("p");
//         p1.className = "card-text";
//         p1.textContent = el.description;

//         const ul = document.createElement("ul");
//         ul.classList.add("list-group", "list-group-flush");

//         const locationTitle = document.createElement("h5");
//         locationTitle.style = "margin-left: 20px;";
//         locationTitle.className = "card-title";
//         locationTitle.textContent = "Common Locations:";

//         el.common_locations.forEach((location) => {
//             const li = document.createElement("li");
//             li.className = "list-group-item";
//             li.textContent = location;
//             ul.append(li);
//         });

//         const cardBody = document.createElement("div");
//         cardBody.className = "card-body";

//         const h4 = document.createElement("h4");
//         h4.className = "card-title";
//         h4.textContent = "Cooking Effect";

//         const p2 = document.createElement("p");
//         p2.className = "card-text";
//         p2.textContent = el.cooking_effect;

//         cardBody1.append(h5, p1);
//         cardBody.append(h4, p2);
//         card.append(img, cardBody1, locationTitle, ul, cardBody);

//         cardContainer.appendChild(card);
//     });
// }

// function idEl(id) {
//     return document.getElementById(id);
// }