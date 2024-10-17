import { useFrame, useThree } from "@react-three/fiber";

import { useEffect, useRef, useState } from "react";
import { Group } from "three";
import Bomb from "./bomb";
import React from "react";
import BombElement from "../../types/bomb-element";
import Position2D from "../../types/position-2d";

const defaultDropPosition = { x: -0.1, y: 1.8 };
const bombDelay = 10;

type Props = {
  speed: { x: number; y: number };
  moveLeft: boolean;
  moveRight: boolean;
  dropBomb: boolean;
  resetBombDropped: () => void;
};

const Bombs = ({
  speed,
  moveLeft,
  moveRight,
  dropBomb,
  resetBombDropped,
}: Props) => {
  const [bombs, setBombs] = useState<BombElement[]>([]);
  const [bombId, setBombId] = useState(0);
  const [dropPosition, setDropPosition] = useState(defaultDropPosition);
  const [bombDelayCounter, setBombDelayCounter] = useState<number>(0);
  const { viewport } = useThree();

  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      if (moveLeft) ref.current.position.x -= speed.x * delta;
      if (moveRight) ref.current.position.x += speed.x * delta;
      setDropPosition({ x: -ref.current.position.x, y: defaultDropPosition.y });
    }
    setBombDelayCounter((prev) => {
      if (prev > 0) return --prev;
      return 0;
    });
  });

  const removeBombFromList = (id: number) => {
    setBombs((prev) => prev.filter((elem) => elem.id !== id));
  };

  const isPositionBelowScreenBottom = (position: Position2D) => {
    return position.y < -viewport.height / 2;
  };

  useEffect(() => {
    if (dropBomb && bombDelayCounter == 0) {
      setBombDelayCounter(bombDelay);
      setBombs((prev) => {
        const id = bombId;

        setBombId((prev) => prev + 1);

        const newBomb = React.cloneElement(
          <Bomb
            position={{ x: dropPosition.x, y: dropPosition.y }}
            key={id}
            speed={speed.y}
            onPositionChange={(position) => {
              if (isPositionBelowScreenBottom(position)) removeBombFromList(id);
            }}
          />
        );

        return [...prev, { id: id, bomb: newBomb }];
      });
    }

    resetBombDropped();
  }, [dropBomb]);

  return (
    <group ref={ref} position={[0, 0, 0]}>
      {bombs.map((bomb) => bomb.bomb)}
    </group>
  );
};

export default Bombs;
