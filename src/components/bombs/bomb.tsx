import { useEffect, useRef, useState } from "react";
import { Mesh, Sprite as ThreeSprite } from "three";
import { useFrame } from "@react-three/fiber";
import { Body, Box, System } from "detect-collisions";

import useTexture from "../../hooks/use-texture";
import Position2D from "../../types/position-2d";
import Sprite from "../sprite";

import bomb from "./../../assets/alien/bomb/missile.png";
import useToDetectCoords from "../../hooks/use-to-detect-coords";
import CONSTANTS from "../../constants";

const bombScale = 0.5;
const objectWidth = 20;
const objectHeight = 40;

type Props = {
  id: number;
  position: Position2D;
  speed: number;
  onPositionChange: (position: Position2D) => void;
  onHit: (id: number, response: any) => void;
  detection: System<Body>;
};

const Bomb = ({
  id,
  position,
  speed,
  onPositionChange,
  onHit,
  detection,
}: Props) => {
  const [detectionZone, setDetectionZone] = useState<Box>();
  const [bombTexture, bombRatio] = useTexture(bomb);
  const ref = useRef<ThreeSprite>(null);

  const calcDetectCoords = useToDetectCoords(
    CONSTANTS.SCREEN_WIDTH,
    CONSTANTS.SCREEN_HEIGHT,
    objectWidth,
    objectHeight
  );

  useEffect(() => {
    const detectCoords = calcDetectCoords(position.x, position.y);

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

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y -= speed * delta;

      onPositionChange({
        x: ref.current.position.x,
        y: ref.current.position.y,
      });

      const detectCoords = calcDetectCoords(
        ref.current.position.x,
        ref.current.position.y
      );

      if (detectionZone) {
        detectionZone.setPosition(detectCoords.x, detectCoords.y, true);

        detection.checkOne(detectionZone, (response) => {
          onHit(id, response);
          detection.remove(detectionZone);
        });
      }
    }
  });

  return (
    <Sprite
      ref={ref}
      position={[position.x, position.y, 0]}
      texture={bombTexture}
      scale={[bombScale * bombRatio, bombScale, bombScale]}
    />
  );
};

export default Bomb;
