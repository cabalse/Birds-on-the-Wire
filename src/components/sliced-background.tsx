import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";

type Props = {
  textureFile: string;
};

const SlicedBackground = ({ textureFile }: Props) => {
  const texture = useLoader(TextureLoader, textureFile);
  const { viewport } = useThree();

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default SlicedBackground;
