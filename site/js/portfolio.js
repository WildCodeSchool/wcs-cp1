function changeAvatar (){
// const imageBase = document.getElementById('avatar');
// const linkOnImage = imageBase.getAttribute("src");
if (document.getElementById("avatar").src = "image/avatar-bis.png"){
    document.getElementById("avatar").src = "image/avatar.svg"
}
else{
    document.getElementById("avatar").src = "image/avatar-bis.png";
}
}


function buttonPrompt(){
    let color = prompt("Choose your color")
    let name = prompt("Enter your name");
    document.getElementById("name").innerHTML = name;
    document.getElementById("name").style.color = 'white';
    document.getElementsByClassName("description pink-bg")[0].style.backgroundColor = color
    document.getElementsByClassName("pink-text")[0].style.Color = color
}