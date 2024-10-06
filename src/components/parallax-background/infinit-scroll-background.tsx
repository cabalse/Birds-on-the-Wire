import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import useTexture from "../../hooks/use-texture";
import useAlignToViewportBottom from "../../hooks/use-align-to-viewport-bottom";
import useAsWideAsViewport from "../../hooks/use-as-wide-as-viewport";
import { Mesh } from "three";

const sortElementByXPosition = (
  ref1: React.MutableRefObject<Mesh | null>,
  ref2: React.MutableRefObject<Mesh | null>,
  ref3: React.MutableRefObject<Mesh | null>
) => {
  const elements = [ref1, ref2, ref3];
  elements.sort((a, b) => {
    if (a.current && b.current) {
      return a.current.position.x - b.current.position.x;
    }
    return 0;
  });
  return elements;
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
  offSet = [0, 0],
}: Props) => {
  const refPos1 = useRef<Mesh>(null);
  const refPos2 = useRef<Mesh>(null);
  const refPos3 = useRef<Mesh>(null);

  const [texture, ratio, ,] = useTexture(textureFile);
  const alignToBottom = useAlignToViewportBottom();
  const asWideAsViewport = useAsWideAsViewport();
  const [planeWidth, planeHeight] = asWideAsViewport(ratio);

  useFrame((state, delta) => {
    if (refPos1.current && refPos2.current && refPos3.current) {
      if (moveRight) {
        refPos1.current.position.x += speed * delta;
        refPos2.current.position.x += speed * delta;
        refPos3.current.position.x += speed * delta;
        const [ref1, , ref3] = sortElementByXPosition(
          refPos1,
          refPos2,
          refPos3
        );
        if (ref1.current && ref3.current) {
          if (ref3.current?.position.x >= planeWidth) {
            ref3.current.position.x = ref1.current.position.x - planeWidth;
          }
        }
      }
      if (moveLeft) {
        refPos1.current.position.x -= speed * delta;
        refPos2.current.position.x -= speed * delta;
        refPos3.current.position.x -= speed * delta;
        const [ref1, , ref3] = sortElementByXPosition(
          refPos1,
          refPos2,
          refPos3
        );
        if (ref1.current && ref3.current) {
          if (ref1.current?.position.x <= -planeWidth) {
            ref1.current.position.x = ref3.current.position.x + planeWidth;
          }
        }
      }
    }
  });

  return (
    <>
      <mesh
        ref={refPos1}
        scale={[planeWidth, planeHeight, 1]}
        position={[
          -planeWidth + offSet[0],
          alignToBottom(planeHeight) + offSet[1],
          0,
        ]}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} transparent={true} opacity={1} />
      </mesh>
      <mesh
        ref={refPos2}
        scale={[planeWidth, planeHeight, 1]}
        position={[offSet[0], alignToBottom(planeHeight) + offSet[1], 0]}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} transparent={true} opacity={1} />
      </mesh>
      <mesh
        ref={refPos3}
        scale={[planeWidth, planeHeight, 1]}
        position={[
          planeWidth + offSet[0],
          alignToBottom(planeHeight) + offSet[1],
          0,
        ]}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} transparent={true} opacity={1} />
      </mesh>
    </>
  );
};

export default InfinitScrollBackground;
