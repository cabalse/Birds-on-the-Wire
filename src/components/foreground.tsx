import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import useTexture from "../hooks/use-texture";
import Sprite from "./sprite";

import post1 from "./../assets/powerline/post_1.png";
import post2 from "./../assets/powerline/post_2.png";
import post3 from "./../assets/powerline/post_3.png";
import powerCabel from "./../assets/powerline/components/curved_cable.png";

type Props = {
  speed: number;
  moveLeft: boolean;
  moveRight: boolean;
};

const Foreground = ({ speed, moveLeft, moveRight }: Props) => {
  const [x, setX] = useState<number>(0);

  const [post1Texture, , width, height] = useTexture(post1, 0.01);
  const [post2Texture, ,] = useTexture(post2, 0.01);
  const [post3Texture, ,] = useTexture(post3, 0.01);
  const [powerCabelTexture, , cabelWidth, cabelHeight] = useTexture(
    powerCabel,
    0.01
  );

  const ratio = width / height;
  const scale: [number, number, number] = [ratio * 3, 3, 1];

  const cabelRation = cabelWidth / cabelHeight;
  const cabelScale: [number, number, number] = [cabelRation * 3, 4.3, 1];

  useFrame((state, delta) => {
    if (moveLeft) setX((prev) => prev - speed * delta);
    if (moveRight) setX((prev) => prev + speed * delta);
  });

  return (
    <group position={[x, -2.4, 0]}>
      <Sprite position={[-8, 0, 0]} texture={post2Texture} scale={scale} />
      <Sprite
        position={[-5.7, 1.1, 0]}
        rotation={Math.PI / 2}
        texture={powerCabelTexture}
        scale={cabelScale}
      />
      <Sprite position={[-4, 0, 0]} texture={post1Texture} scale={scale} />
      <Sprite
        position={[-2.2, 1.1, 0]}
        rotation={Math.PI / 2}
        texture={powerCabelTexture}
        scale={cabelScale}
      />
      <Sprite position={[0, 0, 0]} texture={post2Texture} scale={scale} />
      <Sprite
        position={[2.2, 1.1, 0]}
        rotation={Math.PI / 2}
        texture={powerCabelTexture}
        scale={cabelScale}
      />
      <Sprite position={[4, 0, 0]} texture={post1Texture} scale={scale} />
      <Sprite
        position={[5.7, 1.1, 0]}
        rotation={Math.PI / 2}
        texture={powerCabelTexture}
        scale={cabelScale}
      />
      <Sprite position={[8, 0, 0]} texture={post1Texture} scale={scale} />
      <Sprite
        position={[10, 1.1, 0]}
        rotation={Math.PI / 2}
        texture={powerCabelTexture}
        scale={cabelScale}
      />
      <Sprite position={[12, 0, 0]} texture={post3Texture} scale={scale} />
    </group>
  );
};

export default Foreground;
