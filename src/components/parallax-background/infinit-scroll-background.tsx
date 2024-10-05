import { TextureLoader } from "three";
import { useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";

import BackgroundElement from "./background-element";

type Pos = {
  x: number;
  y: number;
};

type Props = {
  textureFile: string;
  moveLeft: boolean;
  moveRight: boolean;
  speed: number;
  offSet?: [number, number];
};

const InfinitScrollBackground = ({
  textureFile,
  moveLeft,
  moveRight,
  speed,
  offSet,
}: Props) => {
  const { viewport } = useThree();

  const texture = useLoader(TextureLoader, textureFile);

  const aspect = texture.image.width / texture.image.height;
  const planeWidth = viewport.width;
  const planeHeight = planeWidth / aspect;
  const posY = offSet ? offSet[1] : 0;

  const [position, setPosition] = useState({
    b1: { x: -planeWidth, y: posY },
    b2: { x: 0, y: posY },
    b3: { x: planeWidth, y: posY },
  });

  const middleElement = (posObj: { b1: Pos; b2: Pos; b3: Pos }) => {
    if (
      (posObj.b1.x < posObj.b2.x && posObj.b2.x < posObj.b3.x) ||
      (posObj.b3.x < posObj.b2.x && posObj.b2.x < posObj.b1.x)
    )
      return "b2";
    if (
      (posObj.b2.x < posObj.b1.x && posObj.b1.x < posObj.b3.x) ||
      (posObj.b3.x < posObj.b1.x && posObj.b1.x < posObj.b2.x)
    )
      return "b1";
    if (
      (posObj.b1.x < posObj.b3.x && posObj.b3.x < posObj.b2.x) ||
      (posObj.b2.x < posObj.b3.x && posObj.b3.x < posObj.b1.x)
    )
      return "b3";
  };

  const leftElement = (posObj: { b1: Pos; b2: Pos; b3: Pos }) => {
    if (posObj.b1.x < posObj.b2.x && posObj.b1.x < posObj.b3.x) return "b1";
    if (posObj.b2.x < posObj.b1.x && posObj.b2.x < posObj.b3.x) return "b2";
    if (posObj.b3.x < posObj.b1.x && posObj.b3.x < posObj.b2.x) return "b3";
  };

  const rightElement = (posObj: { b1: Pos; b2: Pos; b3: Pos }) => {
    if (posObj.b1.x > posObj.b2.x && posObj.b1.x > posObj.b3.x) return "b1";
    if (posObj.b2.x > posObj.b1.x && posObj.b2.x > posObj.b3.x) return "b2";
    if (posObj.b3.x > posObj.b1.x && posObj.b3.x > posObj.b2.x) return "b3";
  };

  useFrame(() => {
    if (moveRight) {
      setPosition((prev) => {
        const newState = {
          b1: { ...prev.b1, x: prev.b1.x + speed },
          b2: { ...prev.b1, x: prev.b2.x + speed },
          b3: { ...prev.b1, x: prev.b3.x + speed },
        };

        const middle = middleElement(newState);
        const right = rightElement(newState);
        const left = leftElement(newState);

        if (!middle || !right || !left) return newState;

        if (newState[middle].x >= planeWidth / 2)
          newState[right].x = newState[left].x - planeWidth;

        return newState;
      });
    }
    if (moveLeft) {
      setPosition((prev) => {
        const newState = {
          b1: { ...prev.b1, x: prev.b1.x - speed },
          b2: { ...prev.b2, x: prev.b2.x - speed },
          b3: { ...prev.b3, x: prev.b3.x - speed },
        };

        const middle = middleElement(newState);
        const right = rightElement(newState);
        const left = leftElement(newState);

        if (!middle || !right || !left) return newState;

        if (newState[middle].x < -planeWidth / 2)
          newState[left].x = newState[right].x + planeWidth;

        return newState;
      });
    }
  });

  return (
    <>
      <BackgroundElement
        positionX={position.b1.x}
        positionY={posY}
        width={planeWidth}
        height={planeHeight}
        texture={texture}
      />
      <BackgroundElement
        positionX={position.b2.x}
        positionY={posY}
        width={planeWidth}
        height={planeHeight}
        texture={texture}
      />
      <BackgroundElement
        positionX={position.b3.x}
        positionY={posY}
        width={planeWidth}
        height={planeHeight}
        texture={texture}
      />
    </>
  );
};

export default InfinitScrollBackground;
