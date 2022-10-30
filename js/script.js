const play = document.querySelector(".play");
const volume = document.querySelector(".volume");
const refresh = document.querySelector(".refresh");
const settings = document.querySelector(".settings");

const volume_overlay = document.getElementById("volume-overlay");

const play_img = document.getElementById("play-img");

playing = false;

play.addEventListener("click", (event) => {
    togglePlay();
});

document.addEventListener("keydown", (event) => {
    if (event.key == " ") {
        togglePlay();
    }
});

volume.addEventListener("click", (event) => {
    overlayIn(volume_overlay);
});

async function exit_volume() {
    overlayOut(volume_overlay);
}

async function overlayIn(overlay) {
    overlay.style.transform = 'scale(0)'
    overlay.style.display = "block";
    
    for (i = 0; i <= 100; i+=5) {
        overlay.style.transform = 'scale(' + (i/100) + ')';
        await delay(1);
    }
    overlay.style.transform = 'translate(-50%, -50%)';
}

async function overlayOut(overlay) {
    overlay.style.display = "none";
}

async function togglePlay() {
    for (i = 0; i <= 180; i+=4) {
        play_img.style.transform = 'rotate(' + i + 'deg)';
        await delay(1);
    }
    if (playing) {
        play_img.src = "./assets/stop.svg";
    } else {
        play_img.src = "./assets/play.svg";
    }
    for (i = 180; i <= 360; i+=4) {
        play_img.style.transform = 'rotate(' + i + 'deg)';
        await delay(1);
    }
    playing = !playing;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}