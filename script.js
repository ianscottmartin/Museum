// console.log("Running scripts");

const renderCards = (dataArray) => {
    const cardContainer = document.getElementById("card-container");
    dataArray.forEach((cardInfo) => {
        const imgContainer = document.createElement("div");

        const img = document.createElement("img");
        const name = document.createElement("p")


        name.textContent = cardInfo.name

        imgContainer.append(img, name)

        img.src = cardInfo.image;

        img.addEventListener("mouseover", (event) => {
            // console.log(cardInfo)
            const description = document.createElement("p")
            description.textContent = cardInfo.description
            const pName = document.createElement("p")
            pName.textContent = cardInfo.name
            // console.log(pName)
            const id = document.createElement('p')
            id.textContent = cardInfo.id
            imgContainer.append(img, description, id)
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
            const id = document.createElement('p')
            id.textContent = cardInfo.id
            // console.log(pName)
            imgContainer.append(img, description, id)
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

            console.log(e)
            console.log(e.target)

            fetch("https://botw-compendium.herokuapp.com/api/v2")
                .then(response => response.json())
                .then(info => {
                    console.log(e.target)

                })



        })
    })

}

addEventListenerToNavLinks()
fetchData()
fetchDataCat()

