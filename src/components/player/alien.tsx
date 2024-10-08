import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import useTexture from "../../hooks/use-texture";
import Sprite from "../sprite";

import frame000 from "./../../assets/alien/flying_left/__alien_enemy_4_red_white_flying_000.png";
import frame001 from "./../../assets/alien/flying_left/__alien_enemy_4_red_white_flying_001.png";
import frame002 from "./../../assets/alien/flying_left/__alien_enemy_4_red_white_flying_002.png";
import frame003 from "./../../assets/alien/flying_left/__alien_enemy_4_red_white_flying_003.png";
import frame004 from "./../../assets/alien/flying_left/__alien_enemy_4_red_white_flying_004.png";
import frame005 from "./../../assets/alien/flying_left/__alien_enemy_4_red_white_flying_005.png";
import frame006 from "./../../assets/alien/flying_left/__alien_enemy_4_red_white_flying_006.png";
import frame007 from "./../../assets/alien/flying_left/__alien_enemy_4_red_white_flying_007.png";
import frame008 from "./../../assets/alien/flying_left/__alien_enemy_4_red_white_flying_008.png";

import frameRight000 from "./../../assets/alien/flying_right/__alien_enemy_4_red_white_flying_right_000.png";
import frameRight001 from "./../../assets/alien/flying_right/__alien_enemy_4_red_white_flying_right_001.png";
import frameRight002 from "./../../assets/alien/flying_right/__alien_enemy_4_red_white_flying_right_002.png";

type Props = {
  scale: number;
  frameSpeed: number;
  animation: "flight";
  direction: "left" | "right";
};

const Alien = ({ scale, frameSpeed, animation, direction }: Props) => {
  const [f000, frameRatio, ,] = useTexture(frame000);
  const [f001, , ,] = useTexture(frame001);
  const [f002, , ,] = useTexture(frame002);
  const [f003, , ,] = useTexture(frame003);
  const [f004, , ,] = useTexture(frame004);
  const [f005, , ,] = useTexture(frame005);
  const [f006, , ,] = useTexture(frame006);
  const [f007, , ,] = useTexture(frame007);
  const [f008, , ,] = useTexture(frame008);

  const [rightf000, , ,] = useTexture(frameRight000);
  const [rightf001, , ,] = useTexture(frameRight001);
  const [rightf002, , ,] = useTexture(frameRight002);

  const flight = [
    [f000, f001, f002, f003, f004, f005, f006, f007, f008],
    [rightf000, rightf001, rightf002],
  ];

  const [internalDirection, setInternalDirection] = useState(0);
  const [currentSetOfFrames, setCurrentSetOfFrames] = useState(
    flight[internalDirection]
  );
  const [currectFrame, setCurrenBodyFrame] = useState<number>(0);

  useEffect(() => {
    const dir = direction === "left" ? 0 : 1; // 0 is left and 1 is right
    setInternalDirection(dir);
    switch (animation) {
      case "flight":
        setCurrentSetOfFrames(flight[dir]);
        break;
      default:
        setCurrentSetOfFrames(flight[dir]);
    }
  }, [animation, direction]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const newFrame = Math.floor(time / frameSpeed) % currentSetOfFrames.length;
    setCurrenBodyFrame(newFrame);
  });

  return (
    <Sprite
      position={[-0.1, 0.4, 0]}
      texture={currentSetOfFrames[currectFrame]}
      scale={[frameRatio * scale, scale, scale]}
    />
  );
};

export default Alien;
