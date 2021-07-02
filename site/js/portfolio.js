const avatar = document.querySelector('.avatar');
const button = document.getElementById('btn');

avatar.addEventListener('click', () => {
    
    avatar.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTue0QzcbncaPSxMCpLhzOab4a1Sux6xXpow&usqp=CAU";
})

button.addEventListener('click', () => {
    
    const name = document.getElementById('name');
    const bgColor = document.querySelectorAll(".pink-bg");
    
    let change = prompt(`Choose your name`);
    
    name.innerHTML = change;
    name.style.color = "#fff";
    
})