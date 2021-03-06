const popup = document.getElementsByClassName("pop-up")[0];
const bgPopUp = document.getElementsByClassName("bg-pop-up")[0];

//ADD EVENT LISTENER TO CARDS
const cardsClickable = document.getElementsByClassName("hover-card");
for(let i = 0; i < cardsClickable.length; i++ ) {
	cardsClickable[i].addEventListener('click' , showPopup);
}

const illustrations = document.getElementsByClassName("hover-card-illustration");
for(let i = 0; i < illustrations.length; i++ ) {
	if (window.matchMedia("(min-width:768px)").matches) {
		illustrations[i].addEventListener('click' , showPopupIllu);
	}
}

function showPopupIllu() {
	let linkImg = this.parentNode.childNodes[0].src;
	document.body.classList.add("hide-body");
	popup.classList.remove("pop-up-display-none-anim");
	popup.classList.add("pop-up-display-anim");
	popup.classList.add("pop-up-illustration");
	bgPopUp.classList.remove("bg-display-none");
	bgPopUp.classList.remove("pop-up-display-none");
	popup.classList.remove("pop-up-display-none");

	popup.innerHTML = `
		<div class="close-container">
            <span id="close-pop-up"><img src="img/picto/close.png" alt="close modal"></span>
        </div>
		<div class="illustration-popup-container">
			<img src= "${linkImg}" alt="Illustration agrandie"> 
		</div>
		`

	let closeBtn = document.getElementById("close-pop-up");
	closeBtn.addEventListener('click' , closePopUp )
}

//ANIMATION CLOSING POP UP
function closePopUp() {
	popup.classList.remove("pop-up-display-anim");
	popup.classList.add("pop-up-display-none-anim");
	bgPopUp.classList.add("bg-display-none");
	
	setTimeout(function() {
		displayNonePopUp()
		  }, 400);
}

//STOP DISPLAY POP UP AFTER ANIMATION
function displayNonePopUp() {
	popup.innerHTML = "";
	popup.classList.add("pop-up-display-none");
	document.body.classList.remove("hide-body");
	bgPopUp.classList.add("pop-up-display-none");
	popup.classList.remove("pop-up-illustration");
}

//SHOW POP UP
function showPopup() {

	document.body.classList.add("hide-body");
	popup.classList.remove("pop-up-display-none-anim");
	popup.classList.add("pop-up-display-anim");
	bgPopUp.classList.remove("bg-display-none");
	bgPopUp.classList.remove("pop-up-display-none");
	popup.classList.remove("pop-up-display-none");

	if((this.id == "wdev-resileyes")||(this.id == "wdesign-resileyes")) {
		popup.innerHTML = `
		<div class="close-container">
            <span id="close-pop-up"><img src="img/picto/close.png" alt="close modal"></span>
        </div>
		<div class="popup-flex">
			<div class="img-popup">
				<img src="img/popup/Webdevapercu/resileyes-apercu.png" alt="aper??u site internet ResilEyes">
			</div>
			<div class="text-popup">
				<h1 class="pop-up-title">Site vitrine ResilEyes</h1>
				<p class="pop-up-p">ResilEyes est une start-up qui d??veloppe des solutions de th??rapies digitales.</p>
				<p class="little-title-popup">Ann??e</p><p class="pop-up-p">2021</p>
				<p class="little-title-popup">Mission</p><p class="pop-up-p">Cr??ation de la charte graphique et des maquettes du site vitrine ResilEyes puis du d??veloppement front end.</p>
				<p class="little-title-popup">Technologies utilis??es</p>
				<ul class="technologies-list">
					<li class="techno-item">HTML</li>
					<li class="techno-item">CSS</li>
					<li class="techno-item">SASS</li>
					<li class="techno-item">Javascript</li>
				</ul>

				<a target="_blank" href="https://resileyes.com/" class="btn btn-margin-top">Visiter le site</a>
			</div>
		</div> `
	}

	if(this.id == "wdev-reservia") {
	
		popup.innerHTML = `
		<div class="close-container">
            <span id="close-pop-up"><img src="img/picto/close.png" alt="close modal"></span>
        </div>
		<div class="popup-flex">
			<div class="img-popup">
				<img src="img/popup/Webdevapercu/maquette-reservia.png" alt="aper??u site internet Reservia">
			</div>
			<div class="text-popup">
				<h1 class="pop-up-title">Front end du site Reservia</h1>
				<p class="pop-up-p">Projet r??alis?? dans le cadre de ma formation OpenClassrooms de d??veloppeuse front-end.</p>
				<p class="little-title-popup">Ann??e</p><p class="pop-up-p">2021</p>
				<p class="little-title-popup">Mission</p><p class="pop-up-p">R??alisation d'un prototype de site de r??servation d'h??tels ?? partir de maquettes.</p>
				<p class="little-title-popup">Exigences techniques</p><p class="pop-up-p">Site responsive, aucune erreur ni alerte au validateur W3C HTML et CSS, site compatible avec les derni??res versions de Chrome et Firefox.</p>
				<p class="little-title-popup">Technologies utilis??es</p>
				<ul class="technologies-list">
					<li class="techno-item">HTML</li>
					<li class="techno-item">CSS</li>
					<li class="techno-item">SASS</li>
				</ul>

				<a target="_blank" href="https://agatheplunian.github.io/AgathePlunian_2_04042021/" class="btn btn-margin-top">Visiter le site</a>
			</div>
		</div> `
	}

	if(this.id == "wdev-gameon") {
		popup.innerHTML = `
		<div class="close-container">
            <span id="close-pop-up"><img src="img/picto/close.png" alt="close modal"></span>
        </div>
		<div class="popup-flex">
			<div class="img-popup">
				<img src="img/popup/Webdevapercu/GameOn.png" alt="aper??u site internet Game on">
			</div>
			
			<div class="text-popup">
				<h1 class="pop-up-title">Formulaire pour le site Game On</h1>
				<p class="pop-up-p">Projet r??alis?? dans le cadre de ma formation OpenClassrooms de d??veloppeuse front-end.</p>
				<p class="little-title-popup">Ann??e</p><p class="pop-up-p">2021</p>
				<p class="little-title-popup">Mission</p><p class="pop-up-p">Cr??ation d'un formulaire d'inscription en Javascript avec validation et messages d'erreur. Impl??mentation d'un message de confirmation.</p>
				<p class="little-title-popup">Exigences techniques</p><p class="pop-up-p">Travailler sur un repo GitHub fork??, effectuer des tests manuels.</p>
				<p class="little-title-popup">Technologies utilis??es</p>
				<ul class="technologies-list">
					<li class="techno-item">HTML</li>
					<li class="techno-item">CSS</li>
					<li class="techno-item">Javascript</li>
				</ul>

				<a target="_blank" href="https://agatheplunian.github.io/AgathePlunian_4_09072021/" class="btn btn-margin-top">Visiter le site</a>
			</div>
		</div> `
	}

	if(this.id == "wdev-fisheye") {
		popup.innerHTML = `
		<div class="close-container">
            <span id="close-pop-up"><img src="img/picto/close.png" alt="close modal"></span>
        </div>
		<div class="popup-flex">
			<div class="imgs-container-popup">
				<img class="img-shadow" src="img/popup/Webdevapercu/fisheye-accueil.png" alt="aper??u site internet Fisheye">
				<img class="img-shadow" src="img/popup/Webdevapercu/fisheye-profil.png" alt="aper??u site internet Fisheye">
			</div>

				
			<div class="text-popup">
				<h1 class="pop-up-title">Front end du site FishEye</h1>
				<p class="pop-up-p">Projet r??alis?? dans le cadre de ma formation OpenClassrooms de d??veloppeuse front-end.</p>
				<p class="little-title-popup">Ann??e</p><p class="pop-up-p">2021</p>
				<p class="little-title-popup">Mission</p><p class="pop-up-p">Cr??ation d'un site accessible pour une plateforme de photographes ?? partir de maquettes.</p>
				<p class="little-title-popup">Exigences techniques</p><p class="pop-up-p">Site responsive et accessible (v??rification avec AChecker), utiliser des donn??es au format JSON, utiliser USLint, utiliser le pattern Factory Method.</p>
				<p class="little-title-popup">Technologies utilis??es</p>
				<ul class="technologies-list">
					<li class="techno-item">HTML</li>
					<li class="techno-item">CSS</li>
					<li class="techno-item">SASS</li>
					<li class="techno-item">Javascript</li>
				</ul>

				<a target="_blank" href="https://agatheplunian.github.io/AgathePlunian_6_09122021/" class="btn btn-margin-top">Visiter le site</a>
			</div>
		</div> `
	}

	if(this.id == "wdev-ohMyFood") {
	
		popup.innerHTML = `
		<div class="close-container">
            <span id="close-pop-up"><img src="img/picto/close.png" alt="close modal"></span>
        </div>
		<div class="popup-flex">
			<div class="img-popup img-omf-container">
				<img src="img/popup/Webdevapercu/mockup-omf-accueil-transparent.png" alt="aper??u site internet Oh My Food">
				<img src="img/popup/Webdevapercu/mockup-omf-transparent.png" alt="aper??u site internet Oh My Food">
			
			</div>
			
			<div class="text-popup">
				<h1 class="pop-up-title">Front end du site Oh My Food</h1>
				<p class="pop-up-p">Projet r??alis?? dans le cadre de ma formation OpenClassrooms de d??veloppeuse front-end.</p>
				<p class="little-title-popup">Ann??e</p><p class="pop-up-p">2021</p>
				<p class="little-title-popup">Mission</p><p class="pop-up-p">R??alisation du front end d'un site de commande de repas en ligne avec animations et load spinner ?? partir de maquettes.</p>
				<p class="little-title-popup">Exigences techniques</p><p class="pop-up-p">Site mobile first responsive, aucune erreur ni alerte au validateur W3C HTML et CSS, site compatible avec les derni??res versions de Chrome et Firefox.</p>
				<p class="little-title-popup">Technologies utilis??es</p>
				<ul class="technologies-list">
					<li class="techno-item">HTML</li>
					<li class="techno-item">CSS</li>
					<li class="techno-item">SASS</li>
				</ul>

				<a target="_blank" href="https://agatheplunian.github.io/AgathePlunian_3_28052021/" class="btn btn-margin-top">Visiter le site</a>
			</div>
		</div> `

	}

	if(this.id == "wdesign-ecommerce") {
	
		popup.innerHTML = `
		<div class="close-container">
            <span id="close-pop-up"><img src="img/picto/close.png" alt="close modal"></span>
        </div>
		<div class="popup-flex popup-flex-design">
			<div class="img-popup img-popup-design">
				<img src="img/popup/WebDesignApercu/maquette.jpg" alt="aper??u maquette e-commerce">		
			</div>
			
			<div class="text-popup text-popup-design">
				<h1 class="pop-up-title">Maquette d'un site de mat??riel informatique</h1>
				<p class="pop-up-p">Projet r??alis?? dans le cadre de ma formation avec l'??cole ESECAD.</p>
				<p class="little-title-popup">Ann??e</p><p class="pop-up-p">2020</p>
				<p class="little-title-popup">Mission</p><p class="pop-up-p">R??alisation de l'UX et du design de la page d'accueil d'un site marchant de mat??riel informatique.</p>
				<p class="little-title-popup">Technologies utilis??es</p>
				<ul class="technologies-list">
					<li class="techno-item">Figma</li>
					
				</ul>

				<a target="_blank" href="https://agatheplunian.github.io/AgathePlunian_3_28052021/" class="btn btn-margin-top">Visiter le site</a>
			</div>
		</div> `
		
	}

	let closeBtn = document.getElementById("close-pop-up");
	closeBtn.addEventListener('click' , closePopUp )

 }