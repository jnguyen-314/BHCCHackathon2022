// JavaScript Document

class theGallery {};
	
	theGallery.images = [
		"logopost.png",
		"slide0.png",
		"slide1.png"
	];


	theGallery.description = [
		"Our Logo",
		"The BPHC",
		"The Fast Facts"
	];

//The functions below

var page = 0;

function leftGallery() {
	if (page == 0) {
		page = theGallery.images.length-1;
	}
	else {
		page--;
	}
	printGallery();
}

function rightGallery() {
	if (page == theGallery.images.length-1) {
		page = 0;
	}
	else {
		page++;
	}
	printGallery();
}

function printGallery() {
	document.querySelector("p.gallery.caption").innerHTML = "&emsp;" + theGallery.description[page] + "&emsp;";//description change
	document.querySelector("div.imagebackground").style.backgroundImage = "linear-gradient(180deg, #fff0, #fff0, #fff0, #000f)";
	document.querySelector("div.imagebackground").style.backgroundImage += ",url('image/" + theGallery.images[page] + "')";//image change
}

printGallery();

/////////////////////////Below is for the answers of the FAQ

var headerTwo = document.querySelectorAll("h2 i");

var pNum = ["p.pZero", "p.pOne", "p.pTwo", "p.pThree", "p.pFour", "p.pFive"];

var pOpen = ["closed","closed","closed","closed","closed","closed"];

var pAnswer = [
	//First Answer
	'To "Accessing mental health services and overcoming mental health stigma."',
	//Second Answer
	"The $25,000 dollars will be budgeted into: <br>- $10,000 Initial Staffing <br>- $15,000 Email Account and API",
	//Third Answer 
	"HELLO",
	//Fourth Answer
	"HELLO",
	//Fifth Answer
	"HELLO",
	//Sixth Answer
	"HELLO"
];

function showAnswer(num) {
	//Hides answers
	if (pOpen[num] == "open") {
	document.querySelector(pNum[num]).innerHTML = "";
	
	headerTwo[num].classList.remove("fa-caret-down");
	headerTwo[num].classList.add("fa-caret-up");
	pOpen[num] = "closed";
		return;
	}
	
	
	
	//Shows answers
	document.querySelector(pNum[num]).innerHTML = "&emsp;" + pAnswer[num];
	
	headerTwo[num].classList.remove("fa-caret-up");
	headerTwo[num].classList.add("fa-caret-down");	
	pOpen[num] = "open";
	
}