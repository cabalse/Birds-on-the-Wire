import { Canvas } from "@react-three/fiber";
import { System } from "detect-collisions";
import { Suspense, useEffect, useRef, useState } from "react";

import Background from "./components/background";
import DetectKeyPress from "./components/detect-key-press";
import Foreground from "./components/foreground";
import Player from "./components/player/player";
import Bombs from "./components/bombs/bombs";
import Birds from "./components/birds/birds";
import CollisionDebug from "./components/collision-debug";

import "./app.css";
import CONSTANTS from "./constants";
import DIRECTION from "./constants/direction";

function App() {
  const ref = useRef();
  const [detectionSystem] = useState(new System());
  const [movement, setMovement] = useState({
    moveLeft: false,
    moveRight: false,
  });
  const [playerMovementDirection, setPlayerMovementDirection] = useState(
    DIRECTION.NO_DIRECTION
  );
  const [dropBomb, setDropBomb] = useState(false);
  const [hit, setHit] = useState({ id: 0, response: null });

  useEffect(() => {
    const movementDirection = () => {
      if (movement.moveLeft) return DIRECTION.LEFT;
      if (movement.moveRight) return DIRECTION.RIGHT;
      return DIRECTION.NO_DIRECTION;
    };
    console.log("movementDirection", movementDirection());
    setPlayerMovementDirection(movementDirection());
  }, [movement.moveLeft, movement.moveRight]);

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
              speeds={CONSTANTS.SPEED.BACKGROUND} // Speeds for the three different layers of the background
              moveLeft={movement.moveRight}
              moveRight={movement.moveLeft}
            />
            <Foreground
              speed={CONSTANTS.SPEED.FOREGROUND}
              moveLeft={movement.moveRight}
              moveRight={movement.moveLeft}
            />
            <Player facing={playerMovementDirection} />
            <Bombs
              speed={{
                x: CONSTANTS.SPEED.FOREGROUND,
                y: CONSTANTS.SPEED.BOMB_DROP,
              }} // Speed x - for movement when player moves sideways, y - for the dropping bomb
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
            {/* <Birds
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
