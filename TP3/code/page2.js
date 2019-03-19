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
	var type = 0;


	var buttonManager = async function(ev){
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
			type =1;
			updateButtons(fotoAtual,firstPageButton,backButton,nextButton,lastPageButton,slideshowButton,type);
			while (Esc(ev)) {
				if(fotoAtual != totalFotos-1){
					fotoAtual++;
				}
				else if (fotoAtual==totalFotos-1) {
					fotoAtual=1;
				}
				updateScreen(fotoAtual,image,text);
			 	await sleep(1700);
			}
			type =2;
			updateButtons(fotoAtual,firstPageButton,backButton,nextButton,lastPageButton,slideshowButton,type);
		}
		else if(ev.target.parentNode.id=="soundBtn"){
			console.log("entrou");
			muteUnmuteMusic(buttonImage,music);
		}
		updateScreen(fotoAtual,image,text);
		updateButtons(fotoAtual,firstPageButton,backButton,nextButton,lastPageButton,slideshowButton,type);
	}
	updateScreen(fotoAtual,image,text);
	updateButtons(fotoAtual,firstPageButton,backButton,nextButton,lastPageButton,slideshowButton,type);
	firstPageButton.addEventListener("click",buttonManager);
	lastPageButton.addEventListener("click",buttonManager);
	nextButton.addEventListener("click",buttonManager);
	backButton.addEventListener("click",buttonManager);
	soundButton.addEventListener("click",buttonManager);
	slideshowButton.addEventListener("click",buttonManager);
}
function Esc (e) {
    if(e.key === "Escape"||e.key==="Esc"||e.keyCode==27) {
		console.log("ESCAPE CRL");
        return false;
    }
	else {
		console.log("NOT ESCAPE CRL");
		return true;
	}
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

function updateButtons(fotoAtual,firstPageButton,backButton,nextButton,lastPageButton,slideshowButton,type){
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
	else if (type ==1){// se for slideShow type==1
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
	}
	else if(type ==2){//terminar slideshow
		firstPageButton.style.opacity = 1;
		firstPageButton.disabled = false;
		backButton.style.opacity = 1;
		backButton.disabled = false;
		slideshowButton.style.opacity = 1;
		slideshowButton.disabled = false;
	}
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
};
