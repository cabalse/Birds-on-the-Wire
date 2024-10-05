import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";

type Props = {
  textureFile: string;
};

const SlicedBackground = ({ textureFile }: Props) => {
  const texture = useLoader(TextureLoader, textureFile);
  const { viewport } = useThree();

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(viewport.width / 10, viewport.height / 10);

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default SlicedBackground;
