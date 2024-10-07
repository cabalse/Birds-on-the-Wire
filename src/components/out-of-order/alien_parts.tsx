import { useFrame } from "@react-three/fiber";
import useTexture from "../../hooks/use-texture";
import Sprite from "../sprite";

import head from "./../../assets/alien/alien/head.png";
import body from "./../../assets/alien/alien/body.png";
import eyesOpen from "./../../assets/alien/alien/eyes_open.png";
import eyesClosed from "./../../assets/alien/alien/eyes_closed.png";
import neck from "./../../assets/alien/alien/neck.png";
import jaw from "./../../assets/alien/alien/jaw.png";
import pupil from "./../../assets/alien/alien/pupil.png";

import lowerArm from "./../../assets/alien/alien/lower_arm.png";
import upperArm from "./../../assets/alien/alien/upper_arm.png";
import topStick from "./../../assets/alien/alien/top_stick.png";
import backStick from "./../../assets/alien/alien/back_stick.png";

const headScale = 1.4;
const jawScale = 0.55;
const eyeScale = 0.37;
const pupilScale = 0.06;

type Props = {
  scale: number;
  frameSpeed: number;
};

const AlienParts = ({ scale, frameSpeed }: Props) => {
  const [headTexture, headRatio, ,] = useTexture(head);
  const [bodyTexture, bodyRatio, ,] = useTexture(body);
  const [eyesOpenTexture, eyesOpenRatio, ,] = useTexture(eyesOpen);
  const [eyesClosedTexture, eyesClosedRatio, ,] = useTexture(eyesClosed);
  const [neckTexture, neckRatio, ,] = useTexture(neck);
  const [jawTexture, jawRatio, ,] = useTexture(jaw);
  const [pupilTexture, pupilRatio, ,] = useTexture(pupil);

  const [lowerArmTexture, lowerArmRatio, ,] = useTexture(lowerArm);
  const [upperArmTexture, upperArmRatio, ,] = useTexture(upperArm);
  const [topStickTexture, topStickRatio, ,] = useTexture(topStick);
  const [backStickTexture, backStickRatio, ,] = useTexture(backStick);

  const eyes = [eyesOpenTexture, eyesClosedTexture];

  useFrame((state, delta) => {});

  return (
    <group>
      <Sprite
        position={[0.2, 0.31, 0]}
        texture={bodyTexture}
        scale={[bodyRatio * scale, scale, scale]}
      />
      <Sprite
        position={[0.2, 0.7, 0]}
        texture={neckTexture}
        scale={[neckRatio * scale, scale, scale]}
      />
      <group position={[0, 0.89, 0]}>
        {/* Head */}
        <Sprite
          position={[0, 0, 0]}
          texture={headTexture}
          scale={[
            headRatio * scale * headScale,
            scale * headScale,
            scale * headScale,
          ]}
        />
        {/* Jaw */}
        <Sprite
          position={[-0.08, -0.33, 0]}
          texture={jawTexture}
          scale={[
            jawRatio * scale * jawScale,
            scale * jawScale,
            scale * jawScale,
          ]}
        />
        {/* Eyes */}
        <Sprite
          position={[-0.12, -0.2, 0]}
          texture={eyes[0]}
          scale={[
            jawRatio * scale * eyeScale,
            scale * eyeScale,
            scale * eyeScale,
          ]}
        />
        {/* Pupil Right */}
        <Sprite
          position={[-0.1, -0.2, 0]}
          texture={pupilTexture}
          scale={[
            jawRatio * scale * pupilScale,
            scale * pupilScale,
            scale * pupilScale,
          ]}
        />
        {/* Pupil Left */}
        <Sprite
          position={[-0.21, -0.2, 0]}
          texture={pupilTexture}
          scale={[
            jawRatio * scale * pupilScale,
            scale * pupilScale,
            scale * pupilScale,
          ]}
        />
      </group>
      <group position={[0, -0.05, 0]}>
        <Sprite
          position={[0.3, 0.35, 0]}
          rotation={Math.PI / 5.3}
          texture={upperArmTexture}
          scale={[upperArmRatio * scale, scale, scale]}
        />
        <Sprite
          position={[0.16, 0.26, 0]}
          rotation={-Math.PI / 1.5}
          texture={lowerArmTexture}
          scale={[lowerArmRatio * scale, scale, scale]}
        />
        <Sprite
          position={[-0.1, 0.4, 0]}
          texture={topStickTexture}
          scale={[topStickRatio * scale, scale, scale]}
        />
      </group>
    </group>
  );
};

export default AlienParts;
