import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Texture, Sprite as ThreeSprite } from "three";
import Sprite from "../sprite";
import useFlying from "./animations/use-flying";
import useIdle from "./animations/use-idle";

type Props = {
  scale: number;
  frameSpeed: number;
  position: [number, number, number];
  animation: "flying" | "idle";
};

const Bird = ({ scale, frameSpeed, position, animation }: Props) => {
  const ref = useRef<ThreeSprite>(null);
  const [currentSetOfFrames, setCurrentSetOfFrames] = useState<Texture[]>([]);
  const [currectFrame, setCurrenBodyFrame] = useState<number>(0);
  const [internalScale, setInternalScale] = useState<number>(scale);

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
