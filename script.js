console.log("Running scripts");

const renderCards = (dataArray) => {
    const cardContainer = document.getElementById("card-container");
    dataArray.forEach((cardInfo) => {
        const imgContainer = document.createElement("div");

        const img = document.createElement("img");
        const name = document.createElement("p")
        const price = document.createElement("p")

        name.textContent = cardInfo.name
        price.textContent = "1.00"

        imgContainer.append(img, name, price)

        img.src = cardInfo.image;

        img.addEventListener("dblclick", (event) => {
            console.log(cardInfo)
            const pName = document.createElement("p")
            pName.textContent = cardInfo.name
            console.log(pName)
        })



        cardContainer.appendChild(imgContainer);
    });
};


const fetchData = () => {
    return fetch("https://botw-compendium.herokuapp.com/api/v2")
        .then(response => response.json())
        .then(info => {
            console.log(info.data)
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
            debugger
            // a. Return only images that match the clicked link
            fetch("https://botw-compendium.herokuapp.com/api/v2")
                .then(response => response.json())
                .then(info => {

                    renderCards(info.data.monsters)
                })

            // 2. Images should remain - only show images that match the clicked link



        })
    })

}

addEventListenerToNavLinks()
fetchData()