const popup = document.getElementById("pop-up");
const cardResilEyesWdev = document.getElementById("wdev-resileyes");
const bgPopUp = document.getElementsByClassName("bg-pop-up")[0];
cardResilEyesWdev.addEventListener('click', showPopup);

cardResilEyesWdev.addEventListener('click' , (event) => {
	showPopup(event);
});

function closePopUp() {
	popup.classList.remove("pop-up-display-anim");
	popup.classList.add("pop-up-display-none-anim");
	bgPopUp.classList.add("bg-display-none")
	
	setTimeout(function() {
		displayNonePopUp()
		  }, 400);
}

function displayNonePopUp() {
	popup.innerHTML = "";
	popup.classList.add("pop-up-display-none");
	document.body.classList.remove("hide-body");
	bgPopUp.classList.add("pop-up-display-none");

}

function showPopup(event) {

	target = event.target;

	document.body.classList.add("hide-body");
	popup.classList.remove("pop-up-display-none-anim");
	popup.classList.add("pop-up-display-anim");
	bgPopUp.classList.remove("bg-display-none");
	bgPopUp.classList.remove("pop-up-display-none");
	popup.classList.remove("pop-up-display-none");

	if(target.id == "wdev-resileyes") {
		popup.innerHTML = `
		<div class="close-container">
            <span id="close-pop-up"><img src="img/picto/close.png" alt="close modal"></span>
        </div>
		<div class="popup-flex">
			<div class="img-popup">
				<img src="img/popup/Webdevapercu/resileyes-aperçu.png" alt="aperçu site internet ResilEyes">
			</div>
			<div class="text-popup">
				<h1 class="pop-up-title">Site vitrine ResilEyes</h1>
				<p class="pop-up-p">ResilEyes est une start-up qui développe des solutions de thérapies digitales.</p>
				<p class="little-title-popup">Année</p><p class="pop-up-p">2021</p>
				<p class="little-title-popup">Mission</p><p class="pop-up-p">Création de la charte graphique et des maquettes du site vitrine ResilEyes puis, développement front end.</p>
				<p class="little-title-popup">Technologies utilisées</p>
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

	if(target.id == "wdev-ohMyFood") {
		popup.innerHTML = `
		<div class="close-container">
            <span id="close-pop-up"><img src="img/picto/close.png" alt="close modal"></span>
        </div>
		<div class="popup-flex">
			<div class="img-popup">
				<img src="img/popup/Webdevapercu/resileyes-aperçu.png" alt="aperçu site internet ResilEyes">
			</div>
			<div class="text-popup">
				<h1 class="pop-up-title">Site vitrine ResilEyes</h1>
				<p class="pop-up-p">ResilEyes est une start-up qui développe des solutions de thérapies digitales.</p>
				<p class="little-title-popup">Année</p><p class="pop-up-p">2021</p>
				<p class="little-title-popup">Mission</p><p class="pop-up-p">Création de la charte graphique et des maquettes du site vitrine ResilEyes puis, développement front end.</p>
				<p class="little-title-popup">Technologies utilisées</p>
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

	let closeBtn = document.getElementById("close-pop-up");
	closeBtn.addEventListener('click' , closePopUp )

 }