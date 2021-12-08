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


//RENDER PORTFOLIO

const btnDev = document.getElementById("btn-dev");
const btnDesign = document.getElementById("btn-design");
const btnIllu = document.getElementById("btn-illu");
const bgSpan = document.getElementById("bg-menu-works");

btnDev.addEventListener('click' , (event) => {
	switchMenu(event);
	renderProjects(event);
});

btnDesign.addEventListener('click' , (event) => {
	switchMenu(event);
});

btnIllu.addEventListener('click' , (event) => {
	switchMenu(event);
});

//RENDER PROJECTS FUNCTION

//MENU SWITCH PORTFOLIO ANIMATION

function switchMenu(event) {
	let positionActualChosen = document.getElementsByClassName("clicked")[0];
	//console.log(positionActualChosen);
	let btnChosen = event.target;
	let spanBg = document.getElementById("bg-menu-works");
	
	//FROM DEV TO DESIGN
	if((positionActualChosen.id == "btn-dev")&&(btnChosen.id =="btn-design")) {
		spanBg.className="";
		spanBg.classList.add("devToDesign");
		spanBg.classList.add("bg-menu-design");
	}

	//FROM DESIGN TO DEV
	if((positionActualChosen.id == "btn-design")&&(btnChosen.id =="btn-dev")) {
		spanBg.className="";
		spanBg.classList.add("designToDev");
		spanBg.classList.add("bg-menu-dev");
	}

	//FROM DEV TO ILLUSTRATION
	if((positionActualChosen.id == "btn-dev")&&(btnChosen.id =="btn-illu")) {
		spanBg.className="";
		spanBg.classList.add("devToIllu");
		spanBg.classList.add("bg-menu-illu");
	}

	//FROM ILLUSTRATION TO DEV
	if((positionActualChosen.id == "btn-illu")&&(btnChosen.id =="btn-dev")) {
		spanBg.className="";
		spanBg.classList.add("illuToDev");
		spanBg.classList.add("bg-menu-dev");
	}
	//FROM ILLUSTRATION TO DESIGN
	if((positionActualChosen.id == "btn-illu")&&(btnChosen.id =="btn-design")) {
		spanBg.className="";
		spanBg.classList.add("illuToDesign");
		spanBg.classList.add("bg-menu-design");
	}

	//FROM DESIGN TO ILLUSTRATION
	if((positionActualChosen.id == "btn-design")&&(btnChosen.id =="btn-illu")) {
		spanBg.className="";
		spanBg.classList.add("designToIllu");
		spanBg.classList.add("bg-menu-illu");
	}

	positionActualChosen.classList.remove("clicked");
	btnChosen.classList.add("clicked");

}