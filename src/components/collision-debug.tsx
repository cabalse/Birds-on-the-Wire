import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

const CollisionDebug = ({ detection, canvasRef }) => {
  const context = canvasRef.current.getContext("2d");

  useEffect(() => {
    // detection.createBox({ x: 100, y: 100 }, 100, 100);
    // detection.createBox({ x: 100, y: 100 }, 200, 200);
  }, []);

  useFrame(() => {
    context.reset();

    context.font = "12px Arial";
    context.fillText("Detect items: " + detection.data.children.length, 5, 15);

    // context.fillRect(25, 25, 100, 100);

    context.strokeStyle = "#0000FF";
    context.beginPath();
    detection.draw(context);
    context.stroke();
  });

  return null;
};

export default CollisionDebug;
