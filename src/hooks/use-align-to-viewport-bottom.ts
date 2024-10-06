import { useThree } from "@react-three/fiber";

const useAlignToViewportBottom = () => {
  const { viewport } = useThree();

  return (elementHeight: number) => {
    return -viewport.height / 2 + elementHeight / 2;
  };
};

export default useAlignToViewportBottom;
