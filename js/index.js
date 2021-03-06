

document.addEventListener('DOMContentLoaded',function(event){
  
	//ANIMATION BURGER MENU
	let menuToggle = document.getElementById("toggle-menu");
	let burgerMenu = document.getElementById("burger-menu");
	
	
		burgerMenu.addEventListener('click' , function () {
			if(this.classList.contains("open")) {
				this.classList.remove("open");
				menuToggle.classList.add("display-none-menu");
			}
			else {
				this.classList.add("open");
				menuToggle.classList.remove("display-none-menu");
			}
		})
	
	

// ANIMATION TEXT BANNER
  	let title = document.getElementById("text-banner");
 	var i = 0;
	var dataText = ["Bonjour !" ,"Je suis Agathe Plunian" ,"développeuse front-end" ,"et illustratrice"];
	
	function typeWriter(currentText, line , j, finish) {

		if (j < currentText.length) {
			line.innerHTML += currentText[j];
	  
			// wait for a while and call this function again for next character
			setTimeout(function() {
			  typeWriter(currentText, line , j + 1)
				}, 40);
		  }
		if(j == currentText.length) {
			let lineText = document.getElementsByClassName("h1-content")[i];
			lineText.classList.add("no-after");
			i ++;
			setTimeout(function() {
				StartTextAnimation(i)
			}, 100);
			
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

// NAV LINK ET FLECHE BANNER
const logo = document.getElementsByClassName("logo-container");
for(let i = 0; i < logo.length; i++) {
	logo[i].addEventListener('click', scroolToTop);
}

const navAPropos = document.getElementById("nav-a-propos"); 
const navService = document.getElementById("nav-services");
const navPortfolio = document.getElementById("nav-portfolio");
const navCompetence = document.getElementById("nav-competences");
const navContact = document.getElementById("nav-contact");

const snavAPropos = document.getElementById("s-nav-a-propos"); 
const snavService = document.getElementById("s-nav-services");
const snavPortfolio = document.getElementById("s-nav-portfolio");
const snavCompetence = document.getElementById("s-nav-competences");
const snavContact = document.getElementById("s-nav-contact");

const arrowDown = document.getElementById("arrow-down");

arrowDown.addEventListener('click' , scrollDown);

navAPropos.addEventListener('click' , scrollToAPropos);
navService.addEventListener('click' , scrollToService);
navPortfolio.addEventListener('click' , scrollToPorfolio);
navCompetence.addEventListener('click', scrollToCompetences)
navContact.addEventListener('click', scrollToContact);

snavAPropos.addEventListener('click' , scrollToAPropos);
snavService.addEventListener('click' , scrollToService);
snavPortfolio.addEventListener('click' , scrollToPorfolio);
snavCompetence.addEventListener('click', scrollToCompetences)
snavContact.addEventListener('click', scrollToContact);

function scroolToTop() {
	window.scrollTo({
		top : 0,
		behavior: 'smooth'
	});
}

function scrollToAPropos() {

	let offsetsAPropos = document.getElementsByClassName("a-propos")[0].getBoundingClientRect();
	var topAPropos = offsetsAPropos.top + document.documentElement.scrollTop -65;

	let menuToggle = document.getElementById("toggle-menu");
	let burgerMenu = document.getElementById("burger-menu");
	burgerMenu.classList.remove("open");
	menuToggle.classList.add("display-none-menu");

	window.scrollTo({
		top: topAPropos,
		behavior: 'smooth'
	}); 
}

function scrollToContact() {

	let offsetsContact = document.getElementsByClassName("form-contact")[0].getBoundingClientRect();
	var topContact = offsetsContact.top + document.documentElement.scrollTop - 65;

	let menuToggle = document.getElementById("toggle-menu");
	let burgerMenu = document.getElementById("burger-menu");
	burgerMenu.classList.remove("open");
	menuToggle.classList.add("display-none-menu");

	window.scrollTo({
		top: topContact,
		behavior: 'smooth'
	}); 
}

function scrollToPorfolio() {

	let offsetPortfolio = document.getElementsByClassName("mes-travaux")[0].getBoundingClientRect();
	var topPortfolio = offsetPortfolio.top + document.documentElement.scrollTop -65;

	let menuToggle = document.getElementById("toggle-menu");
	let burgerMenu = document.getElementById("burger-menu");
	burgerMenu.classList.remove("open");
	menuToggle.classList.add("display-none-menu");

	window.scrollTo({
		top: topPortfolio,
		behavior: 'smooth'
	}); 

}

function scrollToCompetences() {

	let offsetsSkills = document.getElementsByClassName("skills")[0].getBoundingClientRect();
	var topSkills = offsetsSkills.top + document.documentElement.scrollTop -65;

	let menuToggle = document.getElementById("toggle-menu");
	let burgerMenu = document.getElementById("burger-menu");
	burgerMenu.classList.remove("open");
	menuToggle.classList.add("display-none-menu");

	window.scrollTo({
		top: topSkills,
		behavior: 'smooth'
	}); 
	
}

function scrollToService() {

	let offsetsServices = document.getElementsByClassName("services")[0].getBoundingClientRect();
	var topServices = offsetsServices.top + document.documentElement.scrollTop -65;

	let menuToggle = document.getElementById("toggle-menu");
	let burgerMenu = document.getElementById("burger-menu");
	burgerMenu.classList.remove("open");
	menuToggle.classList.add("display-none-menu");


	window.scrollTo({
		top: topServices,
		behavior: 'smooth'
	}); 
	
}


// ARROW BANNER SCOLL DOWN
function scrollDown() {
	let offsetsAPropos = document.getElementsByClassName("a-propos")[0].getBoundingClientRect();
	var topAPropos = offsetsAPropos.top + document.documentElement.scrollTop -65;

	window.scrollTo({
		top: topAPropos,
		behavior: 'smooth'
	}); 
}

// ANIMATION NAV BAR + A PROPOS + SKILLS BARS
const navbar = document.getElementsByClassName("main-nav")[0];
const aProposBlock = document.getElementsByClassName("a-propos")[0];

const barHTML = document.getElementsByClassName("html-css")[0];
const barJS = document.getElementsByClassName("js")[0];
const barPHP = document.getElementsByClassName("php")[0];
const barSQL = document.getElementsByClassName("sql")[0];
const barPS = document.getElementsByClassName("photoshop")[0];
const barIND = document.getElementsByClassName("indesign")[0];
const barAI = document.getElementsByClassName("illustrator")[0];
const barXD = document.getElementsByClassName("adobeXD")[0];
const barFI = document.getElementsByClassName("figma")[0];

window.onscroll = () => {

	//ANIM NAVBAR
	if (window.scrollY > 580) {
		navbar.classList.add('nav-active');
	} else {
		navbar.classList.remove('nav-active');
	} 

	//ANIM A PROPOS ON SCROLL
	if (window.scrollY > 200) {
		aProposBlock.classList.add('anim-a-propos');
	}

	// ANIM SKILLS BARS
	if (window.scrollY > 2300) {
		barJS.classList.add('animation-bar-js');
		barHTML.classList.add("animation-bar-html");
		barPHP.classList.add("animation-bar-php");
		barSQL.classList.add("animation-bar-sql");
	}

	if (window.scrollY > 2600) {
		barPS.classList.add("animation-bar-ps");
		barIND.classList.add("animation-bar-ind");
		barAI.classList.add("animation-bar-ai");
		barXD.classList.add("animation-bar-XD");
		barFI.classList.add("animation-bar-FI")
	}
};


//RENDER PORTFOLIO

const btnDev = document.getElementById("btn-dev");
const btnDesign = document.getElementById("btn-design");
const btnIllu = document.getElementById("btn-illu");
const bgSpan = document.getElementById("bg-menu-works");
const worksArea = document.getElementById("works-area");
const illustrationWork = document.getElementsByClassName("illustrations")[0];
const webDevWork = document.getElementsByClassName("webDev-portfolio")[0];
const webDesign = document.getElementsByClassName("WebDesign-portfolio")[0];

btnDev.addEventListener('click' , (event) => {
	switchMenu(event);
	renderProjects(event);
});

btnDesign.addEventListener('click' , (event) => {
	switchMenu(event);
	renderProjects(event);
});

btnIllu.addEventListener('click' , (event) => {
	switchMenu(event);
	renderProjects(event);
});

//RENDER PROJECTS FUNCTION
function renderProjects(event) {
	//console.log(event.target);
	if(event.target.id == "btn-illu") {
		webDesign.classList.add("display-none");
		webDesign.classList.remove("display-grid");
		webDevWork.classList.add("display-none");
		webDevWork.classList.remove("display-grid");
		illustrationWork.classList.remove("display-none");
		illustrationWork.classList.add("display-flex");
	}
	if(event.target.id == "btn-dev") {
		webDesign.classList.add("display-none");
		webDesign.classList.remove("display-grid");
		illustrationWork.classList.add("display-none");
		illustrationWork.classList.remove("display-flex");
		webDevWork.classList.remove("display-none");
		webDevWork.classList.add("display-grid");
	}

	if(event.target.id == "btn-design") {
		illustrationWork.classList.add("display-none");
		illustrationWork.classList.remove("display-flex");
		webDevWork.classList.add("display-none");
		webDevWork.classList.remove("display-grid");
		webDesign.classList.remove("display-none");
		webDesign.classList.add("display-grid");
	
	}
	
}

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

