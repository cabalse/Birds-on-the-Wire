import Sprite from "../sprite";

import spaceship1 from "./../../assets/alien/spaceship/body_1.png";
import spaceship2 from "./../../assets/alien/spaceship/body_2.png";
import spaceship3 from "./../../assets/alien/spaceship/body_3.png";
import dome from "./../../assets/alien/spaceship/dome.png";

import useTexture from "../../hooks/use-texture";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

const domeScale = 2.5;

type Props = {
  scale: number;
  frameSpeed: number;
};

const Spaceship = ({ scale, frameSpeed }: Props) => {
  const [domeTexture, domeRatio, ,] = useTexture(dome);
  const [spaceshipTexture1, ratio, ,] = useTexture(spaceship1);
  const [spaceshipTexture2, , ,] = useTexture(spaceship2);
  const [spaceshipTexture3, , ,] = useTexture(spaceship3);

  const spaceshipTexture = [
    spaceshipTexture1,
    spaceshipTexture2,
    spaceshipTexture3,
  ];

  const [currentBodyFrame, setCurrenBodyFrame] = useState<number>(0);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const newFrame = Math.floor(time / frameSpeed) % spaceshipTexture.length;
    setCurrenBodyFrame(newFrame);
  });

  return (
    <group>
      <Sprite
        position={[-0.02, 0.65, 0]}
        texture={domeTexture}
        scale={[
          domeRatio * scale * domeScale,
          scale * domeScale,
          scale * domeScale,
        ]}
      />
      <Sprite
        position={[0, 0, 0.1]}
        texture={spaceshipTexture[currentBodyFrame]}
        scale={[ratio * scale, scale, scale]}
      />
    </group>
  );
};

export default Spaceship;
