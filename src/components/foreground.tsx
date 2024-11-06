import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import useTexture from "../hooks/use-texture";
import Sprite from "./sprite";

import post1 from "./../assets/powerline/post_1.png";
import post2 from "./../assets/powerline/post_2.png";
import post3 from "./../assets/powerline/post_3.png";
import powerCable from "./../assets/powerline/components/curved_cable.png";

const POLE_SCALE = 250;
const CABLE_SCALE = 400;

const GROUP_Y_POS = -110;

const POLE_CENTER_POS = 250;
const POLE_BETWEEN_DISTANCE = 450;
const POLE_X_POS = [
  -POLE_BETWEEN_DISTANCE * 3 + POLE_CENTER_POS,
  -POLE_BETWEEN_DISTANCE * 2 + POLE_CENTER_POS,
  -POLE_BETWEEN_DISTANCE + POLE_CENTER_POS,
  POLE_CENTER_POS,
  POLE_BETWEEN_DISTANCE + POLE_CENTER_POS,
  POLE_BETWEEN_DISTANCE * 2 + POLE_CENTER_POS,
];
const POLE_Y_POS = 0;

const CABLE_OFFSET = 470;
const CABLE_X_POS = [
  -POLE_BETWEEN_DISTANCE * 3 + CABLE_OFFSET,
  -POLE_BETWEEN_DISTANCE * 2 + CABLE_OFFSET,
  -POLE_BETWEEN_DISTANCE + CABLE_OFFSET,
  CABLE_OFFSET,
  POLE_BETWEEN_DISTANCE + CABLE_OFFSET,
  POLE_BETWEEN_DISTANCE * 2 + CABLE_OFFSET,
];
const CABLE_Y_POS = 90;

type Props = {
  speed: number;
  moveLeft: boolean;
  moveRight: boolean;
};

const Foreground = ({ speed, moveLeft, moveRight }: Props) => {
  const [x, setX] = useState<number>(0);

  const [post1Texture, , width, height] = useTexture(post1, 1);
  const [post2Texture, ,] = useTexture(post2, 1);
  const [post3Texture, ,] = useTexture(post3, 1);
  const [powerCableTexture, , CableWidth, CableHeight] = useTexture(
    powerCable,
    1
  );

  const ratio = width / height;
  const scale: [number, number, number] = [ratio * POLE_SCALE, POLE_SCALE, 1];

  const CableRation = CableWidth / CableHeight;
  const CableScale: [number, number, number] = [
    CableRation * CABLE_SCALE,
    CABLE_SCALE,
    1,
  ];

  useFrame((state, delta) => {
    if (moveLeft) setX((prev) => prev - speed * delta);
    if (moveRight) setX((prev) => prev + speed * delta);
  });

  return (
    <group position={[x, GROUP_Y_POS, 0]}>
      {/* Pole Left Most */}
      <Sprite
        position={[POLE_X_POS[0], POLE_Y_POS, 0]}
        texture={post2Texture}
        scale={scale}
      />
      {/* Cable Left Most */}
      <Sprite
        position={[CABLE_X_POS[0], CABLE_Y_POS, 0]}
        rotation={Math.PI / 2}
        texture={powerCableTexture}
        scale={CableScale}
      />

      {/* Pole */}
      <Sprite
        position={[POLE_X_POS[1], POLE_Y_POS, 0]}
        texture={post1Texture}
        scale={scale}
      />
      {/* Cable */}
      <Sprite
        position={[CABLE_X_POS[1], CABLE_Y_POS, 0]}
        rotation={Math.PI / 2}
        texture={powerCableTexture}
        scale={CableScale}
      />

      {/* Pole */}
      <Sprite
        position={[POLE_X_POS[2], POLE_Y_POS, 0]}
        texture={post2Texture}
        scale={scale}
      />
      {/* Cable */}
      <Sprite
        position={[CABLE_X_POS[2], CABLE_Y_POS, 0]}
        rotation={Math.PI / 2}
        texture={powerCableTexture}
        scale={CableScale}
      />

      {/* Pole */}
      <Sprite
        position={[POLE_X_POS[3], POLE_Y_POS, 0]}
        texture={post1Texture}
        scale={scale}
      />
      {/* Cable */}
      <Sprite
        position={[CABLE_X_POS[3], CABLE_Y_POS, 0]}
        rotation={Math.PI / 2}
        texture={powerCableTexture}
        scale={CableScale}
      />

      {/* Pole */}
      <Sprite
        position={[POLE_X_POS[4], POLE_Y_POS, 0]}
        texture={post1Texture}
        scale={scale}
      />
      {/* Cable */}
      <Sprite
        position={[CABLE_X_POS[4], CABLE_Y_POS, 0]}
        rotation={Math.PI / 2}
        texture={powerCableTexture}
        scale={CableScale}
      />

      {/* Pole Last on the Right */}
      <Sprite
        position={[POLE_X_POS[5], POLE_Y_POS, 0]}
        texture={post3Texture}
        scale={scale}
      />
    </group>
  );
};

export default Foreground;
