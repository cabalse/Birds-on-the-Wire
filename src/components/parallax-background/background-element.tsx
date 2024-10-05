import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Texture } from "three";

type Props = {
  positionX: number;
  positionY: number;
  width: number;
  height: number;
  texture: Texture;
};

const BackgroundElement = ({
  width,
  height,
  positionX,
  positionY,
  texture,
}: Props) => {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x = positionX;
      ref.current.position.y = positionY;
    }
  });

  return (
    <mesh
      ref={ref}
      scale={[width, height, 1]}
      position={[positionX, positionY, 0]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent={true} opacity={1} />
    </mesh>
  );
};

export default BackgroundElement;
