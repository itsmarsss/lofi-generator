var ctx = window.AudioContext || window.webkitAudioContext;


bpm = 80;
dur = 90;
vol = 1;



async function generateLofi() {
    let range = Math.floor((Math.random() * (5 + 1)) + 3); // 3 to 8 inclusive
    let start = Math.floor((Math.random() * (24 + 1 - range)));
    let end = start + range;

    notes = [];
    drums = [1, 2, 0, 0, 2, 2, 1, 1];

    for (i = 0; i < (dur / 60) * bpm; i++) {
        let note = Math.floor((Math.random() * (end - start + 1)) + start)
        notes[i] = note;
    }
    for (i = 0; i < 8; i++) {
        drums[i] = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    }
    playNotes(notes);
    playDrums(drums)
}

async function playNotes(notes) {
    let i = 0;
    while (playing) {
        let note = notes[i];
        let audio;
        if (note < 10) {
            audio = './sounds/keys/key0' + note + '.mp3';
        } else {
            audio = './sounds/keys/key' + note + '.mp3';
        }
        audio2.src = audio;
        var audioContext = new ctx();


        let audio2 = document.getElementById('note');
        var biquadExampleMediaElementSource = audioContext.createMediaElementSource(audio2);

        var filterNode = audioContext.createBiquadFilter();

        biquadExampleMediaElementSource.connect(filterNode);

        filterNode.connect(audioContext.destination);

        filterNode.frequency.value = parseFloat(300);

        console.log(i)

        await delay((60 / bpm) * 1000);
        i++;
        if (i >= notes.length) {
            break;
        }
    }
    generateLofi();
}

async function playDrums(drums) {
    let i = 0;
    while (playing) {
        let drum = drums[i % 8];
        let audio;
        if (drum == 1) {
            audio = new Audio('./sounds/drums/boom.wav');
            audio.play();
            audio.volume = vol / 6;
        } else if (drum == 2) {
            audio = new Audio('./sounds/drums/snare.wav');
            audio.play();
            audio.volume = vol / 3;
        }
        await delay((60 / bpm) * 1000);
        i++;
        if (i >= (dur / 60) * bpm) {
            break;
        }
    }
}