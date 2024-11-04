import { forwardRef } from "react";
import { Mesh } from "three";

type Props = {
  position: [number, number, number];
  size: [number, number, number];
};

const WireframeBox = forwardRef<Mesh, Props>(function (
  { position, size }: Props,
  ref
) {
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshBasicMaterial color="black" wireframe={true} />
    </mesh>
  );
});

export default WireframeBox;
