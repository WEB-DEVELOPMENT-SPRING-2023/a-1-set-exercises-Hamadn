/*Making an audio object for each audio and giving it src to the path where audio is stored*/
var sound1 = new Audio();
sound1.src = "../Audio Sampler/Audio/dan.mp3";
var sound2 = new Audio();
sound2.src = "../Audio Sampler/Audio/ah-ha.mp3";
var sound3 = new Audio();
sound3.src = "../Audio Sampler/Audio/emailoftheevening.mp3";
var sound4 = new Audio();
sound4.src = "../Audio Sampler/Audio/back-of-the-net.mp3";
var sound5 = new Audio();
sound5.src = "../Audio Sampler/Audio/iateascotchegg.mp3";
var sound6 = new Audio();
sound6.src = "../Audio Sampler/Audio/hellopartridge.mp3";
var sound7 = new Audio();
sound7.src = "../Audio Sampler/Audio/bangoutoforder.mp3";
var sound8 = new Audio();
sound8.src = "../Audio Sampler/Audio/imconfused.mp3";
var sound9 = new Audio();
sound9.src = "../Audio Sampler/Audio/omg-meme-By-Tuna.mp3";
var sound10 = new Audio();
sound10.src = "../Audio Sampler/Audio/bruh-meme-By-Tuna.mp3";
var sound11 = new Audio();
sound11.src = "../Audio Sampler/Audio/meme-'okay-By-Tuna.mp3";
var sound12 = new Audio();
sound12.src = "../Audio Sampler/Audio/oooooo-meme-By-Tuna.mp3";
var sound13 = new Audio();
sound13.src = "../Audio Sampler/Audio/don't-do-the-voice-By-Tuna.mp3";
var sound14 = new Audio();
sound14.src = "../Audio Sampler/Audio/ok-let’s-go-meme-By-Tuna.mp3";
var sound15 = new Audio();
sound15.src = "../Audio Sampler/Audio/welcome-to-bad-tag-music-By-Tuna.mp3";
var sound16 = new Audio();
sound16.src = "../Audio Sampler/Audio/drop-the-weapon!-(cop-voice-lines)-By-Tuna.mp3";
var sound17 = new Audio();
sound17.src = "../Audio Sampler/Audio/oh,-this-is-bad!-(heavy-voice-lines)-By-Tuna.mp3";

/*Declaring two variable which stores the element with an id of "text" and "tts"*/
let text = document.getElementById("text");
let tts = document.getElementById("tts");

/*Adding an event listener for the button to perform certain function when the user clicks it*/
tts.addEventListener ("click", () => {
    /*Declaring a variable which stores the new speechSynthesis api object with the value of the variable text*/
    let speech = new SpeechSynthesisUtterance(text.value);
    /*Making the window speak the value stored in the variable speech*/
    window.speechSynthesis.speak(speech);
});
