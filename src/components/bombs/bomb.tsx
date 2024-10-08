import { useRef } from "react";
import bomb from "./../../assets/alien/bomb/missile.png";
import { Sprite as ThreeSprite } from "three";
import Sprite from "../sprite";
import useTexture from "../../hooks/use-texture";
import { useFrame } from "@react-three/fiber";

const bombScale = 0.5;

type Props = {
  position: { x: number; y: number };
  speed: number;
  onPositionChange: (position: { x: number; y: number }) => void;
};

const Bomb = ({ position, speed, onPositionChange }: Props) => {
  const [bombTexture, bombRatio] = useTexture(bomb);
  const ref = useRef<ThreeSprite>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y -= speed * delta;

      onPositionChange({
        x: ref.current.position.x,
        y: ref.current.position.y,
      });
    }
  });

  return (
    <Sprite
      ref={ref}
      position={[position.x, position.y, 0]}
      texture={bombTexture}
      scale={[bombScale * bombRatio, bombScale, bombScale]}
    />
  );
};

export default Bomb;
