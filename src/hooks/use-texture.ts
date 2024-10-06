import { useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";

type retType = [Texture, number, number, number];

/**
 * A hook that loads a texture and returns it along with its ratio, width and height.
 *
 * @param {string} url The URL of the texture.
 * @param {number} scale The scale factor to be applied to the texture.
 * @returns {[Texture, number, number, number]} The Texture, Ratio, Width and Height.
 */
const useTexture = (url: string, scale: number = 1): retType => {
  const texture = useLoader(TextureLoader, url);
  return [
    texture, // Texture
    texture.image.width / texture.image.height, // Ratio
    texture.image.width * scale, // Width
    texture.image.height * scale, // Height
  ];
};

export default useTexture;
