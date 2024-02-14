// JSX AudioBufferSourceNode: Example 03
// Same as previous, but with minor tweaks.

const ctx = new AudioContext();
let playAudio;
let stopAudio;
let myBuffer;

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

function App() {
  return (
    <>
      <div>
        <button id="play-btn"
          onClick={() => {
            createSourceNode();
            playAudio();
          }}
        >
          Play
        </button>
        <button id="stop-btn" 
          onClick={() => stopAudio()}
        >
          Stop
        </button>
      </div>
    </>
  );
}

export default App;
