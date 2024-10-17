import { forwardRef } from "react";
import { Object3DEventMap, Sprite as ThreeSprite, Texture } from "three";
import { Vector3 } from "@react-three/fiber";

type Props = {
  texture: Texture;
  scale: [number, number, number];
  position: Vector3;
  rotation?: number;
};

const Sprite = forwardRef<ThreeSprite<Object3DEventMap>, Props>(function (
  { texture, scale, position, rotation = 0 }: Props,
  ref
) {
  return (
    <sprite scale={scale} position={position} ref={ref}>
      <spriteMaterial rotation={rotation} attach="material" map={texture} />
    </sprite>
  );
});

export default Sprite;
