const play = document.querySelector(".play");
const volume = document.querySelector(".volume");
const refresh = document.querySelector(".refresh");
const settings = document.querySelector(".settings");

const play_img = document.getElementById("play-img");

playing = false;

play.addEventListener("click", () => {
    if(playing) {
        play_img.src = "./assets/stop.svg";
    }else {
        play_img.src = "./assets/play.svg";
    }
    playing = !playing;
});
