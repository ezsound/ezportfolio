
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
  const audios = document.getElementsByTagName("audio");
  for (let i = 0; i < audios.length; i++) {
    if (audios[i] !== e.target) {
      audios[i].pause();
      audios[i].currentTime = 0;
    }
  }
}, true);

// 2. Helper function to play the next audio element in the container
function playNextTrack(player) {
  let nextElement = player.nextElementSibling;

  // Scan through siblings until finding the next <audio> tag
  while (nextElement && nextElement.tagName !== "AUDIO") {
    nextElement = nextElement.nextElementSibling;
  }

  if (nextElement) {
    // Force reload to clear stuck or broken buffers
    nextElement.load(); 
    
    nextElement.play().catch(error => {
      console.log("Autoplay failed or prevented by browser policy:", error);
    });
  }
}

// 3. Setup Listeners for all Container Types
const containers = [".audiocontainer audio", ".filmContainer audio", ".miscContainer audio"];

containers.forEach(selector => {
  const players = document.querySelectorAll(selector);

  players.forEach(player => {
    // Triggers when a track finishes naturally
    player.addEventListener("ended", () => {
      playNextTrack(player);
    });

    // FIX: Triggers if a track fails to load completely, gets stuck, or drops connection
    player.addEventListener("error", () => {
      console.warn(`Audio source error on element:`, player.src || "Unknown source");
      playNextTrack(player); // Skip the broken track instead of freezing the player
    });
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