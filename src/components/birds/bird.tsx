import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Texture, Sprite as ThreeSprite } from "three";
import { Body, Box, System } from "detect-collisions";

import Sprite from "../sprite";
import useFlying from "./animations/use-flying";
import useIdle from "./animations/use-idle";
import useToDetectCoords from "../../hooks/use-to-detect-coords";
import CONSTANTS from "../../constants";

const objectWidth = 60;
const objectHeight = 60;

type Props = {
  scale: number;
  frameSpeed: number;
  position: [number, number, number];
  animation: "flying" | "idle";
  detection: System<Body>;
};

const Bird = ({ scale, frameSpeed, position, animation, detection }: Props) => {
  const ref = useRef<ThreeSprite>(null);
  const [, setDetectionZone] = useState<Box>();
  const [currentSetOfFrames, setCurrentSetOfFrames] = useState<Texture[]>([]);
  const [currectFrame, setCurrenBodyFrame] = useState<number>(0);
  const [internalScale, setInternalScale] = useState<number>(scale);

  const [flying, ratio] = useFlying();
  const [idle, , idleScale] = useIdle();

  const calcDetectCoords = useToDetectCoords(
    CONSTANTS.SCREEN_WIDTH,
    CONSTANTS.SCREEN_HEIGHT,
    objectWidth,
    objectHeight
  );

  useEffect(() => {
    switch (animation) {
      case "flying":
        setCurrentSetOfFrames(flying);
        setInternalScale(scale);
        break;
      case "idle":
        setCurrentSetOfFrames(idle);
        setInternalScale(idleScale * scale);
        break;
    }

    const detectCoords = calcDetectCoords(position[0], position[1]);

    setDetectionZone(
      detection.createBox(
        {
          x: detectCoords.x,
          y: detectCoords.y,
        },
        objectWidth,
        objectHeight
      )
    );
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const newFrame = Math.floor(time / frameSpeed) % currentSetOfFrames.length;
    setCurrenBodyFrame(newFrame);
  });

  return (
    <Sprite
      ref={ref}
      position={position}
      texture={currentSetOfFrames[currectFrame]}
      scale={[ratio * internalScale, internalScale, internalScale]}
    />
  );
};

export default Bird;
