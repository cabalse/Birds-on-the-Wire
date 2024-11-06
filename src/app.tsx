import { Canvas } from "@react-three/fiber";
import { System } from "detect-collisions";
import { Suspense, useRef, useState } from "react";

import Background from "./components/background";
import DetectKeyPress from "./components/detect-key-press";
import Foreground from "./components/foreground";
import Player from "./components/player/player";
import Bombs from "./components/bombs/bombs";
import Birds from "./components/birds/birds";
import CollisionDebug from "./components/collision-debug";

import "./app.css";

function App() {
  const ref = useRef();
  const [detectionSystem] = useState(new System());
  const [movement, setMovement] = useState({
    moveLeft: false,
    moveRight: false,
  });
  const [dropBomb, setDropBomb] = useState(false);
  const [hit, setHit] = useState({ id: 0, response: null });

  return (
    <>
      <div className="canvas-container">
        <DetectKeyPress
          onMovingRight={(value) =>
            setMovement((prev) => ({ ...prev, moveRight: value }))
          }
          onMovingLeft={(value) =>
            setMovement((prev) => ({ ...prev, moveLeft: value }))
          }
          onBombDrop={() => {
            setDropBomb(true);
          }}
        />
        <Canvas orthographic={true}>
          <Suspense fallback={null}>
            <Background
              speeds={[150, 250, 400]} // Speeds for the three different layers of the background
              moveLeft={movement.moveRight}
              moveRight={movement.moveLeft}
            />
            <Foreground
              speed={500}
              moveLeft={movement.moveRight}
              moveRight={movement.moveLeft}
            />
            <Player facing={movement.moveLeft ? "left" : "right"} />
            {/* <Bombs
              speed={{ x: 6, y: 2 }} // Speed x - for movement when player moves sideways, y - for the dropping bomb
              moveLeft={movement.moveRight}
              moveRight={movement.moveLeft}
              dropBomb={dropBomb}
              resetBombDropped={() => {
                setDropBomb(false);
              }}
              onHit={(id, response) => {
                setHit({ id: id, response: response });
              }}
              detection={detectionSystem}
            />
            <Birds
              speed={{ x: 6, y: 2 }}
              moveLeft={movement.moveRight}
              moveRight={movement.moveLeft}
              detection={detectionSystem}
              hit={hit}
            />
            <CollisionDebug detection={detectionSystem} canvasRef={ref} /> */}
          </Suspense>
        </Canvas>
      </div>
      <canvas
        width={730}
        height={456}
        ref={ref}
        style={{
          position: "absolute",
          top: "6px",
          left: "7px",
          border: "2px solid red",
        }}
      />
    </>
  );
}

export default App;
