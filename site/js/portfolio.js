const avatar = document.getElementById("avatar");
avatar.addEventListener("click", function() {
    avatar.src = "./image/avatar.svg"
})

const buttonToModifyName = document.getElementById("buttonToModifyName");
buttonToModifyName.addEventListener("click", function() {
    const yourFavoriteColor = prompt("What's your favorite color?");
    const yourName = prompt("What's your name?");

    // consigne 3
    // const description = document.querySelector(".description.pink-bg");
    // description.style.backgroundColor = yourFavoriteColor;

    // consigne 4
    const allPinkElements = document.querySelectorAll(".pink-bg");
    allPinkElements.forEach((onePinkElement) => {
        onePinkElement.style.backgroundColor = yourFavoriteColor;
    })

    const allPinkTexts = document.querySelectorAll(".pink-text");
    allPinkTexts.forEach((onePinkText) => {
        onePinkText.style.color = yourFavoriteColor
    })

    const name = document.getElementById("name")
    name.innerHTML = yourName;
    name.style.color = "white";

})
