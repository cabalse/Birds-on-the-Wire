import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import Background from "./components/background";
import DetectKeyPress from "./components/detect-key-press";
import Foreground from "./components/foreground";
import Player from "./components/player/player";

import "./app.css";
import Bombs from "./components/bombs/bombs";
import Birds from "./components/birds/birds";
import useFlying from "./components/birds/animations/use-flying";

function App() {
  const [movement, setMovement] = useState({
    moveLeft: false,
    moveRight: false,
  });
  const [dropBomb, setDropBomb] = useState(false);

  const [flying, ratio] = useFlying();
  const [idle, , idleScale] = useIdle();

  return (
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
      <Canvas>
        <Suspense fallback={null}>
          <Background
            speeds={[0.5, 1.3, 3]} // Speeds for the three different layers of the background
            moveLeft={movement.moveRight}
            moveRight={movement.moveLeft}
          />
          <Foreground
            speed={6}
            moveLeft={movement.moveRight}
            moveRight={movement.moveLeft}
          />
          <Player facing={movement.moveLeft ? "left" : "right"} />
          <Bombs
            speed={{ x: 6, y: 2 }} // Speed x - for movement when player moves sideways, y - for the dropping bomb
            moveLeft={movement.moveRight}
            moveRight={movement.moveLeft}
            dropBomb={dropBomb}
            resetBombDropped={() => {
              setDropBomb(false);
            }}
          />
          <Birds
            speed={{ x: 6, y: 2 }}
            moveLeft={movement.moveRight}
            moveRight={movement.moveLeft}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
