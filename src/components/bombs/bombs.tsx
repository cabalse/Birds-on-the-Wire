import { useFrame } from "@react-three/fiber";

import { useEffect, useRef, useState } from "react";
import { Group } from "three";
import Bomb from "./bomb";
import React from "react";

const defaultDropPosition = { x: -0.1, y: 1.8 };

type Props = {
  speed: { x: number; y: number };
  moveLeft: boolean;
  moveRight: boolean;
  dropBomb: boolean;
  onBombDropped: () => void;
};

const Bombs = ({
  speed,
  moveLeft,
  moveRight,
  dropBomb,
  onBombDropped,
}: Props) => {
  const [bombs, setBombs] = useState<JSX.Element[]>([]);
  const [bombId, setBombId] = useState(0);
  const [dropPosition, setDropPosition] = useState(defaultDropPosition);

  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      if (moveLeft) ref.current.position.x -= speed.x * delta;
      if (moveRight) ref.current.position.x += speed.x * delta;
      setDropPosition({ x: -ref.current.position.x, y: defaultDropPosition.y });
    }
  });

  useEffect(() => {
    if (dropBomb) {
      console.log("drop bomb");
      onBombDropped();
      setBombs((prev) => {
        const id = bombId;
        setBombId((prev) => prev + 1);
        const newBomb = React.cloneElement(
          <Bomb
            position={{ x: dropPosition.x, y: dropPosition.y }}
            key={id}
            speed={speed.y}
            onPositionChange={(position) => {
              console.log(position);
            }}
          />
        );
        return [...prev, newBomb];
      });
    }
  }, [dropBomb]);

  return (
    <group ref={ref} position={[0, 0, 0]}>
      {bombs}
    </group>
  );
};

export default Bombs;
