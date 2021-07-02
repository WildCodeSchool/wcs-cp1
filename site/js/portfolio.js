const avatar = document.querySelector('.avatar');
const button = document.getElementById('button')

avatar.addEventListener ("click", () => {
    avatar.src = "./image/avatar.svg"
});

button.addEventListener('click', (color) =>{
    const name = document.getElementById('name');
    
    let change = prompt('Choose your name');
    name.innerHTML = change;

})

