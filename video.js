
  var viDeo, playToggle, seekbar, presentTime, videoLength, mute, volume, fullscreen,forward,backward, playRate, span;

function loadPlayer(){
   viDeo = document.getElementById('my_video');
   playToggle = document.getElementById('playpausebtn');
   seekbar = document.getElementById('seekslider');
   presentTime = document.getElementById("presentTime");
   videoLength = document.getElementById("videoLength");
   mute = document.getElementById('mute');
   volume = document.getElementById('volume');
   fullscreen = document.getElementById('fullscreen');
   forward= document.getElementById('stepForward');
   backward = document.getElementById('stepbackward');
   playRate = document.getElementById("speed");


  // Event listeners
  playToggle.addEventListener('click', playPause,false);
  seekbar.addEventListener('change', seeker,false);
  viDeo.addEventListener('timeupdate', seekerTimeUpdate, false );
  mute.addEventListener('click', shhhh, false );
  volume.addEventListener('change',adjustVolume,false);
  fullscreen.addEventListener("click", FullScMode, false );
  viDeo.addEventListener('click', playPause, false );
  forward.addEventListener('click', stepforward, false );
  backward.addEventListener('click', stepbackward, false );
  playRate.addEventListener("change", changeSpeed,false);

 
}


window.onload = loadPlayer;

function playPause() {
    if (viDeo.paused) {
    viDeo.play();
    playToggle.style.background = "url(paused.png)";
     document.getElementById('control').style.display = "none";
   document.getElementById('seekslider').style.marginTop = '15%';
  } else {
    viDeo.pause();
    playToggle.style.background = "url(play.png)";
     document.getElementById('control').style.display = "block";
    document.getElementById('seekslider').style.marginTop = '5%';
  }

}

window.onkeypress = function (event){
  var x = event.keyCode;  
  var y = event.charCode;
  if(x === 32 || y === 32){
    playPause();
  }
}

function stepforward (){
  
   viDeo.currentTime = viDeo.currentTime +5;
}

function stepbackward(){

  viDeo.currentTime = viDeo.currentTime -5;
}

function changeSpeed(){
  viDeo.playbackRate = playRate.value;
}


function seeker() {
  var goTo = viDeo.duration * (seekbar.value / 100);
  viDeo.currentTime = goTo;
}


function seekerTimeUpdate() {


  var newTime = viDeo.currentTime * (100 / viDeo.duration);
  seekbar.value = newTime;

  var curmins = Math.floor(viDeo.currentTime / 60);
  var cursecs = Math.floor(viDeo.currentTime - curmins * 60);
  var durmins = Math.floor(viDeo.duration / 60);
  var dursecs = Math.floor(viDeo.duration - durmins * 60);
  if(cursecs < 10){ cursecs = "0"+cursecs; }
  if(dursecs < 10){ dursecs = "0"+dursecs; }
  if(curmins < 10){ curmins = "0"+curmins; }
  if(durmins < 10){ durmins = "0"+durmins; }
  presentTime.innerHTML = curmins+":"+cursecs;
  videoLength.innerHTML = durmins+":"+dursecs;


	if (viDeo.currentTime < 4.12) {talk1.classList.add("highlight");}
	if (viDeo.currentTime > 4.13) {talk1.classList.remove("highlight");}

	if (viDeo.currentTime > 4.14) {talk2.classList.add("highlight");}
	if (viDeo.currentTime > 7.52) {talk2.classList.remove("highlight");}

	if (viDeo.currentTime > 7.53) {talk3.classList.add("highlight");}
	if (viDeo.currentTime > 11.27) {talk3.classList.remove("highlight");}

	if (viDeo.currentTime > 11.28) {talk4.classList.add("highlight");}
	if (viDeo.currentTime > 13.96) {talk4.classList.remove("highlight");}

	if (viDeo.currentTime > 13.97) {talk5.classList.add("highlight");}
	if (viDeo.currentTime > 17.94) {talk5.classList.remove("highlight");}

	if (viDeo.currentTime > 17.95) {talk6.classList.add("highlight");}
	if (viDeo.currentTime > 22.37) {talk6.classList.remove("highlight");}

	if (viDeo.currentTime > 22.38) {talk7.classList.add("highlight");}
	if (viDeo.currentTime > 26.88) {talk7.classList.remove("highlight");}

	if (viDeo.currentTime > 26.89) {talk8.classList.add("highlight");}
	if (viDeo.currentTime > 30.92) {talk8.classList.remove("highlight");}

	if (viDeo.currentTime > 32.10) {talk9.classList.add("highlight");}
	if (viDeo.currentTime > 34.73) {talk9.classList.remove("highlight");}

	if (viDeo.currentTime > 34.74) {talk10.classList.add("highlight");}
	if (viDeo.currentTime > 39.43) {talk10.classList.remove("highlight");}

	if (viDeo.currentTime > 39.44) {talk11.classList.add("highlight");}
	if (viDeo.currentTime > 41.19) {talk11.classList.remove("highlight");}

	if (viDeo.currentTime > 42.35) {talk12.classList.add("highlight");}
	if (viDeo.currentTime > 46.30) {talk12.classList.remove("highlight");}

	if (viDeo.currentTime > 46.31) {talk13.classList.add("highlight");}
	if (viDeo.currentTime > 49.27) {talk13.classList.remove("highlight");}

	if (viDeo.currentTime > 49.28) {talk14.classList.add("highlight");}
	if (viDeo.currentTime > 53.76) {talk14.classList.remove("highlight");}

	if (viDeo.currentTime > 53.77) {talk15.classList.add("highlight");}
	if (viDeo.currentTime > 57.78) {talk15.classList.remove("highlight");}

	if (viDeo.currentTime > 57.79) {talk16.classList.add("highlight");}
	if (viDeo.currentTime > 59.59) {talk16.classList.remove("highlight");}
}

function shhhh() {
    if (viDeo.muted) {
    viDeo.muted = false;
    mute.style.background = "url(volume-on-icon.png)";
  } else {
    viDeo.muted = true;
    mute.style.background = "url(volume-off-icon.png)";
  }
  if (volume.value > 0) {
  volume.value = 0;
  } else {
    volume.value =50;
  }

}

function adjustVolume() {
  viDeo.volume = volume.value / 100;
}


function FullScMode(){
  if(viDeo.requestFullScreen){
    viDeo.requestFullScreen();
  } else if(viDeo.webkitRequestFullScreen){
    viDeo.webkitRequestFullScreen();
  } else if(viDeo.mozRequestFullScreen){
    viDeo.mozRequestFullScreen();
  }
}



document.getElementById("videoPlayer").addEventListener("mouseover", mouseOver);
document.getElementById("videoPlayer").addEventListener("mouseout", mouseOut);

 function mouseOver() {

  document.getElementById('control').style.display = "block";
  document.getElementById('seekslider').style.marginTop = '5%';

}

function mouseOut(){
  if (viDeo.play){
     document.getElementById('control').style.display = "none";
   document.getElementById('seekslider').style.marginTop = '15%';
  }
 

}












