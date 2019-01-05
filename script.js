//ordet som ska gissas
let secretWord = [];

//En array med en ord.
let words = ["html", "css", "hej", "javascript", "php", "python", "mysql", "wordpress", "jquery", "json", "ajax", "axios", "flexbox", "bootstrap"]

//bokstäver som har gissats som inte finns i secetWord
let wrongGuess = [];

//bokstäver som gissats som finns med i ordet när detta är samma som secret word har man vunnit
let rightGuess = [];

let letter;
let correctLetter = false;
let counter = 0;

//Function som ger ett random ord till variabeln randomWord, och array secretWord får samma antal "_" element som antal bokstäver i randomWord när spelet startas.
function getWord() {

   randomWord = words[Math.floor(Math.random() * words.length)];
   for (let i = 0; i < randomWord.length; i++) {
      rightGuess.push('_');
   }
pickingLetter();
}
getWord();


//Tar bokstaven från knappen du tryckt
function pickingLetter(chosenletter) {
	letter = chosenletter;
	wrongOrRightWord()
}

$('#rightGuess').empty().append(rightGuess + ''); 

//Kollar om bokstaven finns med i ordet
function wrongOrRightWord() {
	
	if(counter < 11) {
		for (var i = 0; i < randomWord.length; i++) {
			if(letter == randomWord[i]) {
				rightGuess[i] = letter;
				$('#rightGuess').empty().append(rightGuess + ' ');
				correctLetter = true;
			}
		}
		if(correctLetter == false){
			wrongGuess.push(letter);
			$('#wrongGuess').empty().append(wrongGuess + ' ');
			wrongAnswerCounter()
		}
	}
	
	if(checkIfYouWon()){
			$('#won').show();
			$('#img0').hide();
			$('#img1').hide();
			$('#img2').hide();
			$('#img3').hide();
			$('#img4').hide();
			$('#img5').hide();
			$('#img6').hide();
			$('#img7').hide();
			$('#img8').hide();
			$('#img9').hide();
			$('#img10').hide();
			$('#img11').hide();
		}
		correctLetter = false;
		return rightGuess	
}

//Kollar hur många fel du gjort
function wrongAnswerCounter(){
	counter++
	pictures();
}
function checkIfYouWon() {
   let temp = rightGuess.join("");
   if (randomWord == temp) {
      return true;
   }
}

function pictures() {
	switch(counter){
		case 0:
			$('#img0').show();
			break;
		case 1:
			$('#img0').hide(); 
			$('#img1').show();
			break;
		case 2:
			$('#img1').hide(); 
			$('#img2').show();
			break;
		case 3:
			$('#img2').hide(); 
			$('#img3').show();
			break;
		case 4:
			$('#img3').hide(); 
			$('#img4').show();
			break;
		case 5:
			$('#img4').hide(); 
			$('#img5').show();
			break;
		case 6:
			$('#img5').hide(); 
			$('#img6').show();
			break;
		case 7:
			$('#img6').hide(); 
			$('#img7').show();
			break;
		case 8:
			$('#img7').hide(); 
			$('#img8').show();
			break;
		case 9:
			$('#img8').hide(); 
			$('#img9').show();
			break;
		case 10:
			$('#img9').hide(); 
			$('#img10').show();
			break;
		case 11:
			$('#img10').hide(); 
			$('#img11').show();
			break;
	}
}	




//ett bild element med olika part
//remove apend