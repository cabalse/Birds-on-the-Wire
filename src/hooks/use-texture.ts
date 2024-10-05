import { useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";

const useTexture = (
  url: string,
  scale: number = 1
): [Texture, number, number] => {
  const texture = useLoader(TextureLoader, url);
  return [texture, texture.image.width * scale, texture.image.height * scale];
};

export default useTexture;
