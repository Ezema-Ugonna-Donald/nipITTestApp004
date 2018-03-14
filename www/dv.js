function mycss(){
	document.getElementById('landPage').style.backgroundImage = 'url("img/landingPage.png")';
}

var loadLandP = setTimeout(mycss, 3000);
window.onload(loadLandP);
