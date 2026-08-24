
const player = document.getElementById("player");
const audio = document.getElementById('my-audio');
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const filmContainer = document.getElementById("filmContainer");
const miscContainer = document.getElementById("miscContainer");
const linkSet2 = document.getElementById("linkSet2");
const audio2 = document.getElementById("my-audio2");
const audio3 = document.getElementById("my-audio3");
const wavplayer2 = document.getElementById("wavplayer2");
const wavplayer3 = document.getElementById("wavplayer3");
const playbutton = document.getElementById("playbutton");

function autoToggleMobile() {
  const isMobile = window.innerWidth <= 767;
  const elements = document.querySelectorAll(".link2.link1.link3.link4.linkSet2");

  elements.forEach(element => {

    element.classList.toggle("link-fade-in", isMobile);
  });
}

window.addEventListener('DOMContentLoaded', autoToggleMobile);


document.addEventListener("play", function (e) {
  var audios = document.getElementsByTagName("audio");
  for (var i = 0; i < audios.length; i++) {
    if (audios[i] !== e.target) {
      audios[i].pause();
			audios[i].currentTime = 0;
    }
  }
}, true);

document.addEventListener("play", function (e) {
  var audios2 = document.getElementsByTagName("audio2");
  for (var i = 0; i < audios2.length; i++) {
    if (audios2[i] !== e.target) {
      audios2[i].pause();
			audios2[i].currentTime = 0;
    }
  }
}, true);

document.addEventListener("play", function (e) {
  var audios3 = document.getElementsByTagName("audio3");
  for (var i = 0; i < audios3.length; i++) {
    if (audios3[i] !== e.target) {
      audios3[i].pause();
			audios3[i].currentTime = 0;
    }
  }
}, true);

  const allAudioPlayers = document.querySelectorAll(".audiocontainer audio");

  allAudioPlayers.forEach(player => {

    player.addEventListener("ended", () => {
      let nextElement = player.nextElementSibling;

      while (nextElement && nextElement.tagName !== "AUDIO") {
        nextElement = nextElement.nextElementSibling;
      }

      if (nextElement) {
        nextElement.play().catch(error => {
          console.log("Autoplay prevented by browser policy:", error);
        });
      }
    });
  });

  const allAudioPlayers2 = document.querySelectorAll(".filmContainer audio");

  allAudioPlayers2.forEach(player => {

    player.addEventListener("ended", () => {
      let nextElement = player.nextElementSibling;

      while (nextElement && nextElement.tagName !== "AUDIO") {
        nextElement = nextElement.nextElementSibling;
      }

      if (nextElement) {
        nextElement.play().catch(error => {
          console.log("Autoplay prevented by browser policy:", error);
        });
      }
    });
  });
	
	  const allAudioPlayers3 = document.querySelectorAll(".miscContainer audio");

  allAudioPlayers3.forEach(player => {

    player.addEventListener("ended", () => {
      let nextElement = player.nextElementSibling;

      while (nextElement && nextElement.tagName !== "AUDIO") {
        nextElement = nextElement.nextElementSibling;
      }

      if (nextElement) {
        nextElement.play().catch(error => {
          console.log("Autoplay prevented by browser policy:", error);
        });
      }
    });
  });
	
	
function toggleImage() {

	console.log("click!");
	player.classList.toggle("fade-in");
}

function loadAudioPlayer() {
  const wavplayer = document.getElementById("wavplayer");
  const audio = document.getElementById("my-audio");

  
  


	
  audio.play();
	wavplayer.classList.toggle("fade-in");

	audiocontainer.classList.toggle("fade-in");
	player.classList.toggle("disable");

	link2.classList.toggle("link-fade-in");
	link3.classList.toggle("link-fade-in");
	link4.classList.toggle("link-fade-in");
	link2.classList.toggle("link2");
	linkSet2.classList.toggle("link-fade-in");
	
}
function loadFilmContainer() {
	const audioList = document.querySelectorAll("my-audio");
	
		console.log("filmclick!");
		wavplayer2.classList.toggle("fade-in");
		filmContainer.classList.toggle("fade-in");
		
		audio.pause();
		audio.currentTime = 0;
		audio3.currentTime = 0;
		audio3.pause();
		audio2.play();
	

	if (audiocontainer.classList.contains("fade-in")) {
		audiocontainer.classList.toggle("fade-in");
	}

	if (miscContainer.classList.contains("fade-in")) {
		miscContainer.classList.toggle("fade-in");
	}	
	
	if (wavplayer.classList.contains("fade-in")) {
		wavplayer.classList.toggle("fade-in");
	}
	
	if (wavplayer3.classList.contains("fade-in")) {
		wavplayer3.classList.toggle("fade-in");
	}
}


function loadMiscContainer() {
	console.log("miscclick!");
	wavplayer3.classList.toggle("fade-in");
	miscContainer.classList.toggle("fade-in");
	
	audio2.pause();
	audio.currentTime = 0;
	audio2.currentTime = 0;
	audio.pause();
	audio3.play();
	
	if (filmContainer.classList.contains("fade-in")) {
		filmContainer.classList.toggle("fade-in");
	}
	
	if (audiocontainer.classList.contains("fade-in")) {
		audiocontainer.classList.toggle("fade-in");
	}
	
	if (wavplayer2.classList.contains("fade-in")) {
		wavplayer2.classList.toggle("fade-in");
	}
	
	if (wavplayer.classList.contains("fade-in")) {
		wavplayer.classList.toggle("fade-in");
	}
}	

function loadaudiocontainer() {
	console.log("gameclick");
	wavplayer.classList.toggle("fade-in");
	audiocontainer.classList.toggle("fade-in");
	
	audio2.pause();
	audio2.currentTime = 0;
	audio3.pause();
	audio3.currentTime = 0;
	audio.play();
	
	if (filmContainer.classList.contains("fade-in")) {
		filmContainer.classList.toggle("fade-in");
	}
	
	if (miscContainer.classList.contains("fade-in")) {
		miscContainer.classList.toggle("fade-in");
	}
	
	if (wavplayer2.classList.contains("fade-in")) {
		wavplayer2.classList.toggle("fade-in");
	}
	
	if (wavplayer3.classList.contains("fade-in")) {
		wavplayer3.classList.toggle("fade-in");
	}
}