import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import { IRefPhaserGame, PhaserGame } from "./game/PhaserGame";

const App = () => {
  const [numBits, setNumBits] = useState<number>(100);

  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  const addBit = () => {
    setNumBits(numBits + 1);
    return numBits + 1;
  };

  return (
    <>
      <div id="app">
        <div
          id="main"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div className="outer">
            <button>hi</button>
            <p>{`Num Bits: ${numBits}`}</p>
            <button onClick={addBit}>Add Bit</button>
          </div>
          <PhaserGame ref={phaserRef} numBits={numBits} addBit={addBit} />
          <div className="outer">
            <button>hey</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
