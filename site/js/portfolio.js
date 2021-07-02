const avatar = document.querySelector('.avatar');
const button = document.getElementById('button');
const background = document.querySelectorAll('.pink-bg');
const color = document.querySelectorAll('.pink-text');
const lien = document.getElementsByTagName('a');
const modif = document.getElementById('modify');

console.log(lien);

avatar.addEventListener('click', () => {
    
    avatar.src = "https://static.wikia.nocookie.net/heros/images/e/eb/Homer_Simpson_Infobox.png/revision/latest/scale-to-width-down/300?cb=20201111220101&path-prefix=fr";
})

button.addEventListener('click', () => {
    
    const name = document.getElementById('name');
    let changeName = prompt('Choose your name');
    let changeBG = prompt('Choose your color')
    color.forEach(element => {
        element.style.color ="#750ff7";
    }) 
    background.forEach(bg => {
        bg.style.backgroundColor = changeBG;
    })

    name.innerHTML = changeName;
    name.style.color = "#FFF"
    background.style.backgroundColor = "#750ff7";  
})

modif.addEventListener('click', () => {
    let prompt = prompt("You can modify");
    const canModif = document.querySelectorAll('modif');

    canModif.forEach(change => {
        canModif.innerHTML = prompt;
    })
})



