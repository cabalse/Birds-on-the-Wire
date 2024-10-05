import { useRef } from "react";
import { Texture } from "three";

type Props = {
  texture: Texture;
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: number;
};

function Sprite({ texture, scale, position, rotation = 0 }: Props) {
  const ref = useRef(null);

  return (
    <sprite scale={scale} position={position} ref={ref}>
      <spriteMaterial rotation={rotation} attach="material" map={texture} />
    </sprite>
  );
}

export default Sprite;
