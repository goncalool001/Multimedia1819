"use strict";

const totalFotos = 16;
const opacDisabled = 0.3;  //transparência para botões desactivados
const imgFolder = "../resources/image/";
const txtFolder = "../resources/text/";


(function()
{
	window.addEventListener("load", main);
}());

function main(){
	var fotoAtual = 1;
	var image = document.getElementById("photo");
	var text = document.getElementById("text");
	var firstPageButton = document.getElementById("firstBtn");
	var backButton = document.getElementById("backBtn");
	var nextButton = document.getElementById("nextBtn");
	var lastPageButton = document.getElementById("lastBtn");
	var slideshowButton = document.getElementById("slideShowBtn");
	var soundButton = document.getElementById("soundBtn");
	var buttonImage = soundButton.getElementsByTagName("img")[0];
	var music = document.getElementsByTagName("audio")[0];

	var buttonManager = function(ev){
		if(ev.target.parentNode.id=="nextBtn" && (fotoAtual>=1 && fotoAtual<totalFotos)){
			fotoAtual++;
		}
		else if(ev.target.parentNode.id=="backBtn" && (fotoAtual>1 && fotoAtual<=totalFotos)){
			fotoAtual--;
		}
		else if(ev.target.parentNode.id=="firstBtn"){
			fotoAtual=1;
		}
		else if(ev.target.parentNode.id=="lastBtn"){
			fotoAtual = totalFotos;
		}
		else if(ev.target.parentNode.id=="slideShowBtn"){
		}
		else if(ev.target.parentNode.id=="soundBtn"){
			console.log("entrou");
			muteUnmuteMusic(buttonImage,music);
		}
		updateScreen(fotoAtual,image,text);
		updateButtons(fotoAtual,firstPageButton,backButton,nextButton,lastPageButton,slideshowButton);
	}
	updateScreen(fotoAtual,image,text);
	updateButtons(fotoAtual,firstPageButton,backButton,nextButton,lastPageButton,slideshowButton);
	firstPageButton.addEventListener("click",buttonManager);
	lastPageButton.addEventListener("click",buttonManager);
	nextButton.addEventListener("click",buttonManager);
	backButton.addEventListener("click",buttonManager);
	soundButton.addEventListener("click",buttonManager);
	slideshowButton.addEventListener("click",buttonManager);
}

function updateScreen(fotoAtual,image,text){
	if(fotoAtual<10){
		image.src = imgFolder + "0" + fotoAtual + ".jpg";
		text.src = txtFolder + "0" + fotoAtual + ".txt";
	}
	else{
		image.src = imgFolder + fotoAtual + ".jpg";
		text.src = txtFolder + fotoAtual + ".txt";
	}
}

function updateButtons(fotoAtual,firstPageButton,backButton,nextButton,lastPageButton,slideshowButton){
	if(fotoAtual==1){
		firstPageButton.style.opacity = opacDisabled;
		firstPageButton.disabled = true;
		backButton.style.opacity = opacDisabled;
		backButton.disabled = true;
		nextButton.style.opacity = 1;
		nextButton.disabled = false;
		lastPageButton.style.opacity = 1;
		lastPageButton.disabled = false;
	}
	else if(fotoAtual==totalFotos){
		firstPageButton.style.opacity = 1;
		firstPageButton.disabled = false;
		backButton.style.opacity = 1;
		backButton.disabled = false;
		nextButton.style.opacity = opacDisabled;
		nextButton.disabled = true;
		lastPageButton.style.opacity = opacDisabled;
		lastPageButton.disabled = true;
	}
	else if(fotoAtual>1 && fotoAtual<totalFotos){
		firstPageButton.style.opacity = 1;
		firstPageButton.disabled = false;
		backButton.style.opacity = 1;
		backButton.disabled = false;
		nextButton.style.opacity = 1;
		nextButton.disabled = false;
		lastPageButton.style.opacity = 1;
		lastPageButton.disabled = false;
	}
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

function muteUnmuteMusic(soundButtonImage,music){
	if(music.muted==false){
		music.muted = true;
		soundButtonImage.src = "../resources/extra/soundOffBtn.png";
	}
	else{
		music.muted = false;
		soundButtonImage.src = "../resources/extra/soundOnBtn.png";
	}
}
