console.log("Running scripts");

const renderCards = (dataArray) => {
    const cardContainer = document.getElementById("card-container");
    dataArray.forEach((cardInfo) => {
        const imgContainer = document.createElement("div");

        const img = document.createElement("img");
        const name = document.createElement("p")
        // const description = document.createElement("p")
        // const equipment = document.createElement('p')


        name.textContent = cardInfo.name
        // description.textContent = cardInfo.description
        // equipment.textContent = cardInfo.equipment

        imgContainer.append(img, name)

        img.src = cardInfo.image;

        img.addEventListener("mouseover", (event) => {
            // console.log(cardInfo)
            const description = document.createElement("p")
            description.textContent = cardInfo.description
            const pName = document.createElement("p")
            pName.textContent = cardInfo.name
            // console.log(pName)
            imgContainer.append(img, description)
        })



        cardContainer.appendChild(imgContainer);
    });
};
const fetchDataCat = () => {
    return fetch("https://botw-compendium.herokuapp.com/api/v2")
        .then(response => response.json())
        .then(info => {
            // console.log(info.data)
            renderLinksCards(info.data.treasure)
            return info
        })
}

const renderLinksCards = (dataArray) => {
    const cardlinkContainer = document.getElementById("card-linkscontainer");
    dataArray.forEach((cardInfo) => {
        const imgContainer = document.createElement("div");

        const img = document.createElement("img");
        const name = document.createElement("p")


        name.textContent = cardInfo.name

        imgContainer.append(img, name)

        img.src = cardInfo.image;

        img.addEventListener("click", (event) => {
            // console.log(cardInfo)
            const description = document.createElement("p")
            description.textContent = cardInfo.description
            const pName = document.createElement("p")
            pName.textContent = cardInfo.name
            // console.log(pName)
            imgContainer.append(img, description)
        })



        cardlinkContainer.appendChild(imgContainer);
    });
};


const fetchData = () => {
    return fetch("https://botw-compendium.herokuapp.com/api/v2")
        .then(response => response.json())
        .then(info => {
            // console.log(info.data)
            renderCards(info.data.monsters)
            return info
        })
}

const addEventListenerToNavLinks = () => {
    const links = document.querySelectorAll(".link")
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            // 1. Fetch data from json
            console.log(e)
            console.log(e.target)
            // debugger
            // a. Return only images that match the clicked link
            fetch("https://botw-compendium.herokuapp.com/api/v2")
                .then(response => response.json())
                .then(info => {
                    console.log(e.target)
                    // renderCards(info.data.monsters)
                    // renderCards(info.data.creatures)
                    // renderCards(info.data.equipment)
                    // renderCards(info.data.materials)
                    // renderCards(info.data.treasure)
                    // console.log(renderCards)

                })


            // 2. Images should remain - only show images that match the clicked link



        })
    })

}

addEventListenerToNavLinks()
fetchData()
fetchDataCat()

// const renderCards = (dataArray) => {
//     const cardContainer = document.getElementById("card-container");
//     dataArray.forEach((cardInfo) => {
//         const imgContainer = document.createElement("div");

//         const img = document.createElement("img");
//         const name = document.createElement("p")
//         // const description = document.createElement("p")
//         // const equipment = document.createElement('p')


//         name.textContent = cardInfo.name
//         // description.textContent = cardInfo.description
//         // equipment.textContent = cardInfo.equipment

//         imgContainer.append(img, name)

//         img.src = cardInfo.image;