//Copied from scriptfaq file.
//stats file became slides file

class theGallery {};
	
	theGallery.images = [
		"logopost.png",
		"slide0.png",
		"slide1.png",
		"slide2.png",
		"slide3.png",
		"slide4.png",
		"slide5.png",
		"slide6.png",
		"slide7.png",
		"slide8.png"
	];


	theGallery.description = [
		"Welcome to Team 5 hackathon presentation. <br> We will be explaining how AI can better the mental Health of Boston",
		"The Boston Public Health Commission (BPHC) <br> They gather their data through anonymous telephone calls",
		"Fast facts of an overview of Boston's status on mental health",
		"The persistent sadness and persistent anxiety rate in Boston <br> 12% and 21% respectively.",
		"The mental hospitalization and suicide rate in Boston <br> 77.1/10,000 and 5.9/10,000",
		"So what is Artificial Intelligence (AI) <br> AI is simply technology using data to create something.",
		"The challenges. Mental Health is still a stigma, which is probably why BPHC do anonymous phone calls. <br> Privacy matters",
		"BPHC has statistics on location and mental status in Boston. It can be further helped with AI technology. <br> For phone calls, have the AI take key words such as today's lingo or common symptoms.",
		"Since it is a matter of public health, emails can be sent to users if they wished so. With AI, they can take the next step towards a better mental health. <br> Think of an email like an annual physical appointment, but mental appointment.",
		"The End. Now to head to FAQ for some clarifications."
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
//run it the first time
printGallery();
