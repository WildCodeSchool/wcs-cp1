let avatar = document.querySelector('.avatar');
let button = document.getElementById('button')

avatar.addEventListener ("click", () => {
    avatar.src = "./image/avatar.svg"
});

button.addEventListener('click', () =>{
    const name = document.getElementById('name');

    let change = prompt('Choose your name');
    name.innerHTML = change;
})