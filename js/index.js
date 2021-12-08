// ANIMATION TEXT BANNER
document.addEventListener('DOMContentLoaded',function(event){
  
  	let title = document.getElementById("text-banner");
 	var i = 0;
	var dataText = ["Bonjour !" ,"Je suis Agathe Plunian" ,"développeuse front-end" ,"et illustratrice"];
	var speed = 50; /* The speed/duration of the effect in milliseconds */
	
	function typeWriter(currentText, line , j, finish) {

		if (j < currentText.length) {
			line.innerHTML += currentText[j];
	  
			// wait for a while and call this function again for next character
			setTimeout(function() {
			  typeWriter(currentText, line , j + 1)
				}, 50);
		  }
		if(j == currentText.length) {
			let lineText = document.getElementsByClassName("h1-content")[i];
			lineText.classList.add("no-after");
			i ++;
			setTimeout(function() {
				StartTextAnimation(i)
			}, 200);
			
		}
	}
		
	function StartTextAnimation(i) {
	
		if(i < dataText.length) {
			let line = document.createElement("p");
			line.classList.add('h1-content');
			title.appendChild(line);
			let currentText = dataText[i];
			j = 0;
			typeWriter(currentText ,line, j)
		}
	}	

 
	 StartTextAnimation(i);

});

// ANIMATION NAV BAR
const navbar = document.getElementsByClassName("main-nav")[0];
window.onscroll = () => {
	if (window.scrollY > 580) {
		navbar.classList.add('nav-active');
	} else {
		navbar.classList.remove('nav-active');
	}
};


//ANIMATION MENU PORTFOLIO

const btnDev = document.getElementById("btn-dev");
const btnDesign = document.getElementById("btn-design");
const btnIllu = document.getElementById("btn-ilu");

btnDev.addEventListener('click' , switchMenu());
btnDesign.addEventListener('click' , switchMenu);

function switchMenu() {
	console.log("ok")
}