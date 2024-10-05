import { Texture } from "three";

type Props = {
  position: [number, number, number];
  width: number;
  height: number;
  texture: Texture;
};

const GraphicElement = ({ width, height, position, texture }: Props) => {
  return (
    <mesh scale={[width, height, 1]} position={position}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent={true} opacity={1} />
    </mesh>
  );
};

export default GraphicElement;
