let avatar = document.getElementById("avatar");

avatar.addEventListener ("click",  () => {
	avatar.src = "./image/avatar-bis.png"
})


let btn = document.getElementById("nameChanger");

btn.addEventListener ("click", () => {
	const name = document.getElementById("name");
	const colorBg = document.getElementsByClassName("pink-bg");

	let nameChanger = prompt(`Choose your name`);
	let backgroundChanger = prompt(`Choose the color`);
	
	name.innerHTML = nameChanger;
	name.style.color = "#ffffff";
	
	colorBg.innerHTML = backgroundChanger;
	colorBg.style.backgroundColor = "#750ff7";
})
