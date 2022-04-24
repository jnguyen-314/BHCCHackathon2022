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
	"The $25,000 dollars will be budgeted into: <br>- $10,000 Initial Staffing <br>- $15,000 Email Account and AI",
	//Third Answer 
	"Our citations are: <br> <a href='https://www.bphc.org/healthdata/health-of-boston-report/Documents/16_C13_Mental%20health_16-17_HOB_final-17.pdf' target='_blank'>Chapter 13 of BPHC</a> <br> <a href='https://www.bphc.org/healthdata/Pages/Boston-Behavioral-Risk-Factor-Surveillance-System.aspx' target='_blank'>BPHC method of surveying</a>",
	//Fourth Answer
	"1. Work with the BPHC and their Boston Behaivioral Risk Factor Surveillance System (BRFSS). In other words, working with their telephone survey method <br><br>2. Calls will be recorded for AI purposes, of course with the user's consent. <br><br>3.Take in the call data and have it decipher by an AI. <br><br>4. After user consent to having his/her/their email shared, the AI can share information for him/her/them to continue further mental health endeavors. <br><br>5. Some examples would be like a website that an AI can be present to assist the user. <br><br> In the end, the main focus of this project is to help users surpass the stigma of reaching out for help. The AI will do its best to tailor the help for each user for the city of Boston.",
	//Fifth Answer
	"Artificial Intelligence are smart machines that are capable of performing tasks using data.",
	//Sixth Answer
	"Mental health, according to the World Health Organization, as: 'a state of well-being in which every individual realizes his or her own potential, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his or her community.'"
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