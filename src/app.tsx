import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import Background from "./components/background";
import DetectKeyPress from "./components/detect-key-press";
import Foreground from "./components/foreground";

import "./app.css";

function App() {
  const [movement, setMovement] = useState({
    moveLeft: false,
    moveRight: false,
  });

  return (
    <div className="canvas-container">
      <DetectKeyPress
        onMovingRight={(value) =>
          setMovement((prev) => ({ ...prev, moveRight: value }))
        }
        onMovingLeft={(value) =>
          setMovement((prev) => ({ ...prev, moveLeft: value }))
        }
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
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
