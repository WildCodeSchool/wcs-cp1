const avatar = document.querySelector('.avatar');
const button = document.getElementById('button');
const background = document.querySelector('.pink-bg');
const color = document.querySelectorAll('.pink-test');



avatar.addEventListener('click', () => {
    
    avatar.src = "https://static.wikia.nocookie.net/heros/images/e/eb/Homer_Simpson_Infobox.png/revision/latest/scale-to-width-down/300?cb=20201111220101&path-prefix=fr";
})

button.addEventListener('click', () => {
    
    const name = document.getElementById('name');
    
    let change = prompt('Choose your name');
    color.style.color = "#750ff7";
    
    name.innerHTML = change;
    name.style.color = "#FFF"
    background.style.backgroundColor = "#750ff7";
    
})
