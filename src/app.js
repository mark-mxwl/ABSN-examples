// JS AudioBufferSourceNode: Example 01
// Creates audio buffer and source node on load.

// const ctx = new AudioContext();
// let playAudio;
// let stopAudio;

// const playBtn = document.getElementById("play-btn");
// const stopBtn = document.getElementById("stop-btn");
// playBtn.addEventListener("click", () => playAudio());
// stopBtn.addEventListener("click", () => stopAudio());

// fetch("MM_synth_fill_002.wav")
//   .then((res) => res.arrayBuffer())
//   .then((buffer) => ctx.decodeAudioData(buffer))
//   .then((buffer) => {
//     const myBuffer = buffer;
//     const mySourceNode = ctx.createBufferSource();
//     mySourceNode.buffer = myBuffer;
//     mySourceNode.connect(ctx.destination);
//     playAudio = () => mySourceNode.start();
//     stopAudio = () => mySourceNode.stop();
//   });

// JS AudioBufferSourceNode: Example 02
// Creates audio buffer on load, but allows for repeated source node creation.

const ctx = new AudioContext();
let playAudio;
let stopAudio;
let myBuffer;

const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
playBtn.addEventListener("click", () => {
  createSourceNode();
  playAudio();
});
stopBtn.addEventListener("click", () => stopAudio());

fetch("MM_synth_fill_002.wav")
  .then((res) => res.arrayBuffer())
  .then((buffer) => ctx.decodeAudioData(buffer))
  .then((buffer) => {
    myBuffer = buffer;
  });

function createSourceNode() {
  const mySourceNode = ctx.createBufferSource();
  mySourceNode.buffer = myBuffer;
  mySourceNode.connect(ctx.destination);
  playAudio = () => mySourceNode.start();
  stopAudio = () => mySourceNode.stop();
}
