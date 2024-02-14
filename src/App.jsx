// JSX AudioBufferSourceNode: Example 03
// Buffer is created on first render only and stored as a ref.
// AudioContext, playAudio, and stopAudio are also stored as refs 
// to avoid disconnection through re-rendering of the component.

import { useRef, useEffect } from "react";

function App() {
  const ctx = useRef(new AudioContext());
  const myBuffer = useRef();
  const playAudio = useRef();
  const stopAudio = useRef();

  useEffect(() => {
    fetch("MM_synth_fill_002.wav")
      .then((res) => res.arrayBuffer())
      .then((buffer) => ctx.current.decodeAudioData(buffer))
      .then((buffer) => {
        myBuffer.current = buffer;
      });
  }, []);

  function createSourceNode() {
    const mySourceNode = ctx.current.createBufferSource();
    mySourceNode.buffer = myBuffer.current;
    mySourceNode.connect(ctx.current.destination);
    playAudio.current = () => mySourceNode.start();
    stopAudio.current = () => mySourceNode.stop();
  }

  return (
    <>
      <div>
        <button
          id="play-btn"
          onClick={() => {
            createSourceNode();
            playAudio.current();
          }}
        >
          Play
        </button>
        <button 
          id="stop-btn" 
          onClick={() => stopAudio.current()}>
          Stop
        </button>
      </div>
    </>
  );
}

export default App;
