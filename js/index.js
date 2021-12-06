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

/*
	function typeWriter(currentText, line ) {
		console.log(currentText);

		for(let j = 0 ; j < currentText.length ; j++) {
			line.innerHTML += currentText[j];
		}

	}	
	  

	function StartTextAnimation() {
		for(i = 0; i < dataText.length; i++) {	
			let line = document.createElement("p");
			title.appendChild(line);
			let currentText = dataText[i];
			setTimeout(function() {
				typeWriter(currentText ,line);
			  }, 20);
		}
		
	 }

	


	function typeWriter() {
		for(i = 0; i < txt.length; i++) {
			//let line = document.createElement("p");
			//title.appendChild(line);
			let currentText = txt[i];
			setTimeout(writing, speed);
			writing(currentText)		
		}
	}

	function writing(currentText) {
		console.log(currentText)
		
		
	}
*/

 /*
  function typeWriter() {
	var dataText = 
	let title = document.getElementById("text-banner");

		for(i = 0; i < dataText.length; i++) {	
			let ligne = document.createElement("p");
			console.log(dataText[i]);
			title.appendChild(ligne);
			
			for(j = 0 ; j < dataText[i].length ; j++){
				console.log(dataText[i][j]);
				
				let currentText = dataText[i][j]
				if (j < dataText[i].length) {
					writingLetter(ligne, currentText);		
				}
			} 
  		}
		 // setTimeout(typeWriter, 60);
	}

	 
	function writingLetter(ligne, currentText) {
		ligne.innerHTML += dataText[i][j];
	}
	typeWriter();

	function typeWriter() {
		var dataText = [ "Bonjour !", "Je suis Agathe Plunian,", "développeuse front-end", "et illustratrice"];
		let title = document.getElementById("text-banner");
	
			for(i = 0; i < dataText.length; i++) {	
				let ligne = document.createElement("p");
				console.log(dataText[i]);
				title.appendChild(ligne);
				
				for(j = 0 ; j < dataText[i].length ; j++){
					console.log(dataText[i][j]);
					
					let currentText = dataText[i][j]
					if (j < dataText[i].length) {
						writingLetter(ligne, currentText);		
					}
				} 
			  }
			 // setTimeout(typeWriter, 60);
		}
	
		function writingLetter(ligne, currentText) {
			ligne.innerHTML += dataText[i][j];
		}
		typeWriter();



  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1

     title.innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
*/


});