var app = angular.module('myApp', []);
app.controller('myController', function() {
	var vm = this;
	var wordArr = ['happy', 'sad', 'eccentric', 'angry', 'frustrated', 'Mendez','She', 'He', 'You', 'I', 'Carrie', 'It'];
	var phraseArr =['2 peas in a pod', 'you cannot have one without the other', 'I can throw you as far as I want', 'I hate your hair', 'you are not as thin as you used to be', 'is someone making eggs or did you far?','why are you not wearing pink?'];
	var outputSpot = document.getElementById('wordsHere');
	var styleArr = ['ugly', 'pretty', 'underlined', 'bold', 'tiny'];
	
	var generate = function(arr) {
		return arr[Math.floor(Math.random()*arr.length)];
	}
	vm.addWord = function(decoration) {
		if (decoration) {
			outputSpot.innerHTML += '<span class="' + generate(styleArr) + '"> ' + generate(wordArr) + ' </span>';
		}
		else {
			outputSpot.innerHTML += generate(wordArr)+ ' ';
		}
	}
	vm.addPhrase = function(decoration) {
		if (decoration) {
			outputSpot.innerHTML += '<span class="' + generate(styleArr) + '"> ' + generate(phraseArr) + ' </span>';
		}
		else {
			outputSpot.innerHTML +=  generate(phraseArr) + ' ';
		}
	}
});