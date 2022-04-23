//Copied from scriptfaq file.

class theGallery {};
	
	theGallery.images = [
		"photo.png",
		"photo2.png",
		"photo3.png"
	];


	theGallery.description = [
		"Your red Photo",
		"Your yellow Photo",
		"Your green Photo"
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
	transitionGallery()
	printGallery();
}

function rightGallery() {
	if (page == theGallery.images.length-1) {
		page = 0;
	}
	else {
		page++;
	}
	transitionGallery()
	printGallery();
}



function transitionGallery() {
	
}

function printGallery() {
	document.querySelector("p.gallery.caption").innerHTML = "&emsp;" + theGallery.description[page] + "&emsp;";//description change
	document.querySelector("div.imagebackground").style.backgroundImage = "linear-gradient(180deg, #fff0, #fff0, #fff0, #000f)";
	document.querySelector("div.imagebackground").style.backgroundImage += ",url('image/" + theGallery.images[page] + "')";//image change
}
