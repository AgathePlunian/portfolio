
//ERROR MESSAGES 
const errorMessages = {
	names : "Veuillez renseigner ce champ s'il vous plait",
	email : "Oups, l'adresse e-mail n'est pas valide",
	emailEmpty : "Veuillez renseigner votre adresse e-mail s'il vous plait",
	sujectEmpty : "Veuillez renseigner ce champ s'il vous plait",
	messageEmpty : "N'oubliez pas d'écrire votre message :)"
  };

  //DOM ELEMENTS
	const firstName = document.getElementById("firstname");
	const lastName = document.getElementById("lastname");
	const email = document.getElementById("email");
	const message = document.getElementById("message");
	const subject = document.getElementById("subject");
  
  //SET ERROR MESSAGE
  function setError(el, error) {
	let target;
	if(NodeList.prototype.isPrototypeOf(el)) {
	  target = el[0].parentNode;
	}
	else {
	  target = el.parentNode;
	}
	target.setAttribute("data-error", error);
	target.setAttribute("data-error-visible", true);
  }
  
  //REMOVE ERROR MESSAGE
  function removeError(el) {
	let target;
	if(NodeList.prototype.isPrototypeOf(el)) {
	  target = el[0].parentNode;
	}
	else {
	  target = el.parentNode;
	}
	target.removeAttribute("data-error",);
	target.removeAttribute("data-error-visible");
  }
  
  //FIRSTNAME AND LASTNAME VALIDATION 
  function validateNames (el) {
	if(el.value == 0) {
  
	  setError(el, errorMessages.names);
	  return false;
	}
	else {     
	  removeError(el);
	  return true;
	}
  }
  
  //EMAIL VALIDTION
  function validateEmail(email) {
	let mailformat = /^\S+@\S+\.\S+$/;
	if(!email.value.match(mailformat) && email.value!= 0 ) {  
	  setError(email, errorMessages.email);
	  return false;
	}
	else if(email.value == 0) {
	  setError(email, errorMessages.emailEmpty);
	  return false;
	}
	else {     
	  removeError(email);
	  return true;
	} 
  }

  function validateMessage(el) {
	if(el.value == 0) {
  
		setError(el, errorMessages.messageEmpty);
		return false;
	  }
	  else {     
		removeError(el);
		return true;
	  }
  }

  function validateSubject(el) {
	if(el.value == 0) {
  
		setError(el, errorMessages.sujectEmpty);
		return false;
	  }
	  else {     
		removeError(el);
		return true;
	  }
  }
  
  
  
  function validate(event) {
  
	//event.preventDefault();
  
	
   
	//APPEL FONCTIONS
	validateNames(firstName);
	validateNames(lastName);
	validateEmail(email);
	validateMessage(message);
	validateSubject(subject);
	 
	//CONDITION VALIDATION FORM
	if(validateNames(firstName)&&
	  validateNames(lastName)&&
	  validateEmail(email)&&
	  validateMessage(message)&&
	  validateSubject(subject)
	)
  
	//CLOSE MODAL
	{
	 return true;
  
	}

	else {
		return false;
	}
  }