import { useFrame } from "@react-three/fiber";

import { useRef } from "react";
import { Group } from "three";
import Bird from "./bird";

type Props = {
  speed: { x: number; y: number };
  moveLeft: boolean;
  moveRight: boolean;
};

const Birds = ({ speed, moveLeft, moveRight }: Props) => {
  // const [birds, setBirds] = useState<JSX.Element[]>([]);
  // const [birdId, setBirdId] = useState(0);

  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      if (moveLeft) ref.current.position.x -= speed.x * delta;
      if (moveRight) ref.current.position.x += speed.x * delta;
    }
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <Bird scale={1} frameSpeed={0.2} />
    </group>
  );
};

export default Birds;
