import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Texture } from "three";

type Props = {
  position: { x: number; y: number; z: number };
  dimensions: { width: number; height: number; length: number };
  texture: Texture;
  movement: { speed: number; isMovingLeft: boolean; isMovingRight: boolean };
  movedTo?: (x: number, y: number, z: number) => void;
};

const BackgroundMoveableElement = ({
  position,
  dimensions,
  texture,
  movement,
  movedTo,
}: Props) => {
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      if (movement.isMovingLeft)
        ref.current.position.x += movement.speed * delta;
      if (movement.isMovingRight)
        ref.current.position.x -= movement.speed * delta;
      if ((movement.isMovingLeft || movement.isMovingRight) && movedTo) {
        movedTo(
          ref.current.position.x,
          ref.current.position.y,
          ref.current.position.z
        );
      }
    }
  });

  return (
    <mesh
      ref={ref}
      scale={[dimensions.width, dimensions.height, dimensions.length]}
      position={[position.x, position.y, position.z]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent={true} opacity={1} />
    </mesh>
  );
};

export default BackgroundMoveableElement;
