import { useThree } from "@react-three/fiber";

/**
 * A hook that returns a function that calculates the width and height of a plane that is as wide as the viewport.
 * @returns {(ratio:number) => [number, number]} A function that takes a ratio and returns the width and height of a plane that is as wide as the viewport.
 */
const useAsWideAsViewport = () => {
  const { viewport } = useThree();

  return (ratio: number) => {
    const planeWidth = viewport.width;
    const planeHeight = planeWidth / ratio;
    return [planeWidth, planeHeight];
  };
};

export default useAsWideAsViewport;
