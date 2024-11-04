import { useThree } from "@react-three/fiber";
import CONSTANTS from "../constants";

const useToDetectCoords = (
  screenWidth: number,
  screenHeight: number,
  objectWidth: number,
  objectHeight: number
) => {
  const { viewport } = useThree();

  const ratioX = screenWidth / viewport.width;
  const ratioY = screenHeight / viewport.height;

  const calcCoords = (x: number, y: number) => {
    const detectX =
      (x * ratioX + screenWidth / 2) * CONSTANTS.DETECT_TO_COORD_XSCALE -
      objectWidth / 2;

    const detectY =
      screenHeight -
      ((y * ratioY + screenHeight / 2) * CONSTANTS.DETECT_TO_COORD_YSCALE +
        objectHeight / 2);

    return { x: detectX, y: detectY };
  };

  return calcCoords;
};

export default useToDetectCoords;
