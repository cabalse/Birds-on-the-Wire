import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import Background from "./components/background";
import DetectKeyPress from "./components/detect-key-press";

import "./app.css";
import Foreground from "./components/foreground";

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
            speeds={[0.005, 0.01, 0.03]}
            moveLeft={movement.moveLeft}
            moveRight={movement.moveRight}
          />
          <Foreground
            speed={0.07}
            moveLeft={movement.moveLeft}
            moveRight={movement.moveRight}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
