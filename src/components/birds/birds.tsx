import { useFrame } from "@react-three/fiber";

import { useEffect, useRef } from "react";
import { Group } from "three";
import Bird from "./bird";
import { Body, System } from "detect-collisions";

type Props = {
  speed: { x: number; y: number };
  moveLeft: boolean;
  moveRight: boolean;
  detection: System<Body>;
  hit: any;
};

const Birds = ({ speed, moveLeft, moveRight, detection, hit }: Props) => {
  // const [birds, setBirds] = useState<JSX.Element[]>([]);
  // const [birdId, setBirdId] = useState(0);

  const ref = useRef<Group>(null);

  useEffect(() => {
    console.log("A bird is hit", hit);
  }, [hit]);

  useFrame((state, delta) => {
    if (ref.current) {
      if (moveLeft) ref.current.position.x -= speed.x * delta;
      if (moveRight) ref.current.position.x += speed.x * delta;
    }
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <Bird
        scale={1}
        frameSpeed={0.2}
        position={[0, -1, 0]}
        animation="idle"
        detection={detection}
      />
      <Bird
        scale={1}
        frameSpeed={0.2}
        position={[-2, -1, 0]}
        animation="flying"
        detection={detection}
      />
      <Bird
        scale={1}
        frameSpeed={0.2}
        position={[2, -1, 0]}
        animation="flying"
        detection={detection}
      />
    </group>
  );
};

export default Birds;
