"use strict";

var fotoAtual = 1;
const totalFotos = 16;
const opacDisabled = 0.3;  //transparência para botões desactivados
const imgFolder = "../resources/image/";
const txtFolder = "../resources/text/";
var audioVolume = 1;


(function()
{
	window.addEventListener("load", main);
}());


function main()
{
	var image = document.getElementById("photo");
	var text = document.getElementById("text");
	var firstPageButton = document.getElementById("firstBtn");
	var backButton = document.getElementById("backBtn");
	var nextButton = document.getElementById("nextBtn");
	var lastPageButton = document.getElementById("lastBtn");
	var slideshowButton = document.getElementById("slideShowBtn");
	var soundButton = document.getElementById("soundBtn");
	image.src = imgFolder + "0" + fotoAtual + ".jpg";
	text.src = txtFolder + "0" + fotoAtual + ".txt";
	firstPageButton.style.opacity = opacDisabled;
	firstPageButton.disabled = true;
	backButton.style.opacity = opacDisabled;
	backButton.disabled = true;
	firstPageButton.addEventListener("click",showFirstPage);
	lastPageButton.addEventListener("click",showLastPage);
	nextButton.addEventListener("click",showNextPage);
	backButton.addEventListener("click",showPageBefore);
	soundButton.addEventListener("click",muteUnmuteMusic);
	slideshowButton.addEventListener("click",slideShow);
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function slideShow(ev) {
	var image = document.getElementById("photo");
	var text = document.getElementById("text");
	var firstPageButton = document.getElementById("firstBtn");
	var lastPageButton = document.getElementById("lastBtn");
	var backButton = document.getElementById("backBtn");
	var nextButton = document.getElementById("nextBtn");
	var slideshowButton = document.getElementById("slideShowBtn");

	nextButton.disabled = true;
	lastPageButton.disabled = true;
	backButton.disabled = true;
	firstPageButton.disabled = true;
	slideshowButton.disabled = true;

	lastPageButton.style.opacity = opacDisabled;
	nextButton.style.opacity = opacDisabled;
	backButton.style.opacity = opacDisabled;
	firstPageButton.style.opacity = opacDisabled;
	slideshowButton.style.opacity = opacDisabled;
	for(fotoAtual =1; fotoAtual<totalFotos ;fotoAtual++){
		if(fotoAtual != totalFotos-1){
			if(fotoAtual>9){
				image.src = imgFolder + fotoAtual + ".jpg";
				text.src = txtFolder + fotoAtual + ".txt";
			}
			else{
				image.src = imgFolder + "0" + fotoAtual + ".jpg";
				text.src = txtFolder + "0" + fotoAtual + ".txt";
			}
		}
		if(fotoAtual==totalFotos-1){
			image.src = imgFolder + totalFotos + ".jpg";
			text.src = txtFolder + totalFotos + ".txt";
		}
		 await sleep(2000);
		}
		firstPageButton.style.opacity = 1;
		firstPageButton.disabled = false;
		backButton.style.opacity = 1;
		backButton.disabled = false;
		slideshowButton.style.opacity = 1;
		slideshowButton.disabled = false;
	}

function showFirstPage(ev){
	var image = document.getElementById("photo");
	var text = document.getElementById("text");
	var firstPageButton = document.getElementById("firstBtn");
	var lastPageButton = document.getElementById("lastBtn");
	var backButton = document.getElementById("backBtn");
	var nextButton = document.getElementById("nextBtn");
	fotoAtual = 1;
	image.src = imgFolder + "0" + fotoAtual + ".jpg";
	text.src = txtFolder + "0" + fotoAtual + ".txt";
	firstPageButton.style.opacity = opacDisabled;
	firstPageButton.disabled = true;
	nextButton.style.opacity = 1;
	nextButton.disabled = false;
	lastPageButton.style.opacity = 1;
	lastPageButton.disabled = false;
	backButton.style.opacity = opacDisabled;
	backButton.disabled = true;

}

function showLastPage(ev){
	var image = document.getElementById("photo");
	var text = document.getElementById("text");
	var firstPageButton = document.getElementById("firstBtn");
	var lastPageButton = document.getElementById("lastBtn");
	var backButton = document.getElementById("backBtn");
	var nextButton = document.getElementById("nextBtn");
	fotoAtual = totalFotos;
	image.src = imgFolder + fotoAtual + ".jpg";
	text.src = txtFolder + fotoAtual + ".txt";
	firstPageButton.style.opacity = 1;
	firstPageButton.disabled = false;
	backButton.style.opacity = 1;
	backButton.disabled = false;
	lastPageButton.style.opacity = opacDisabled;
	lastPageButton.disabled = true;
	nextButton.style.opacity = opacDisabled;
	nextButton.disabled = true;
}

function showNextPage(ev){
	var image = document.getElementById("photo");
	var text = document.getElementById("text");
	var firstPageButton = document.getElementById("firstBtn");
	var lastPageButton = document.getElementById("lastBtn");
	var backButton = document.getElementById("backBtn");
	var nextButton = document.getElementById("nextBtn");
	if(fotoAtual<totalFotos && fotoAtual != totalFotos-1){
		fotoAtual++;
		backButton.style.opacity = 1;
		backButton.disabled = false;
		firstPageButton.style.opacity = 1;
		firstPageButton.disabled = false;
		if(fotoAtual>9){
			image.src = imgFolder + fotoAtual + ".jpg";
			text.src = txtFolder + fotoAtual + ".txt";
		}
		else{
			image.src = imgFolder + "0" + fotoAtual + ".jpg";
			text.src = txtFolder + "0" + fotoAtual + ".txt";
		}
	}
	if(fotoAtual==totalFotos-1){
		image.src = imgFolder + totalFotos + ".jpg";
		text.src = txtFolder + totalFotos + ".txt";
		lastPageButton.style.opacity = opacDisabled;
		lastPageButton.disabled = true;
		nextButton.style.opacity = opacDisabled;
		nextButton.disabled = true;
	}
}

function showPageBefore(ev){
	var image = document.getElementById("photo");
	var text = document.getElementById("text");
	var firstPageButton = document.getElementById("firstBtn");
	var lastPageButton = document.getElementById("lastBtn");
	var backButton = document.getElementById("backBtn");
	var nextButton = document.getElementById("nextBtn");
	if(fotoAtual>1 && fotoAtual != 2){
		nextButton.style.opacity = 1;
		nextButton.disabled = false;
		fotoAtual--;
		lastPageButton.style.opacity = 1;
		lastPageButton.disabled = false;
		if(fotoAtual>9){
			image.src = imgFolder + fotoAtual + ".jpg";
			text.src = txtFolder + fotoAtual + ".txt";
		}
		else{
			image.src = imgFolder + "0" + fotoAtual + ".jpg";
			text.src = txtFolder + "0" + fotoAtual + ".txt";
		}
	}
	if(fotoAtual==2){
		image.src = imgFolder + "01" + ".jpg";
		text.src = txtFolder + "01" + ".txt";
		firstPageButton.style.opacity = opacDisabled;
		firstPageButton.disabled = true;
		backButton.style.opacity = opacDisabled;
		backButton.disabled = true;
	}
}

function muteUnmuteMusic(ev){
	var soundButton = document.getElementById("soundBtn");
	var buttonImage = soundButton.getElementsByTagName("img")[0];
	var music = document.getElementsByTagName("audio")[0];
	if(audioVolume==1){
		audioVolume = 0;
		music.muted = true;
		buttonImage.src = "../resources/extra/soundOffBtn.png";
	}
	else{
		audioVolume = 1;
		music.muted = false;
		buttonImage.src = "../resources/extra/soundOnBtn.png";
	}
}
