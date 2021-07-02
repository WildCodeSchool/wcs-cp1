const avatarImage = document.querySelector('.avatar');


avatarImage.addEventListener('click', function(){
  avatarImage.src = "https://cdn.pixabay.com/photo/2014/04/02/10/54/person-304893_1280.png";
})

avatarImage.addEventListener('mouseover', function () {
    avatarImage.src = "https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg";
  })
  
  // We add a listener on the title, when the mouse leave it changes the color 
  avatarImage.addEventListener('mouseleave', function () {
    avatarImage.src = "https://cdn.pixabay.com/photo/2014/04/02/10/54/person-304893_1280.png";
  })
  

  function promptMe(){
    var userAdjective = prompt("Enter your name :");
    alert (userAdjective);
}