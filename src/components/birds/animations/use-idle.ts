import { Texture } from "three";
import useTexture from "../../../hooks/use-texture";

import frame01 from "./../../../assets/bird/idle/__seagull_idle_000.png";
import frame02 from "./../../../assets/bird/idle/__seagull_idle_001.png";
import frame03 from "./../../../assets/bird/idle/__seagull_idle_002.png";
import frame04 from "./../../../assets/bird/idle/__seagull_idle_003.png";
import frame05 from "./../../../assets/bird/idle/__seagull_idle_004.png";
import frame06 from "./../../../assets/bird/idle/__seagull_idle_005.png";
import frame07 from "./../../../assets/bird/idle/__seagull_idle_006.png";
import frame08 from "./../../../assets/bird/idle/__seagull_idle_007.png";
import frame09 from "./../../../assets/bird/idle/__seagull_idle_008.png";
import frame10 from "./../../../assets/bird/idle/__seagull_idle_009.png";
import frame11 from "./../../../assets/bird/idle/__seagull_idle_010.png";
import frame12 from "./../../../assets/bird/idle/__seagull_idle_011.png";
import frame13 from "./../../../assets/bird/idle/__seagull_idle_012.png";
import frame14 from "./../../../assets/bird/idle/__seagull_idle_013.png";
import frame15 from "./../../../assets/bird/idle/__seagull_idle_014.png";

const scale = 0.75;

const useIdle = (): [Texture[], number, number] => {
  const [texture01, ratio, ,] = useTexture(frame01);
  const [texture02, , ,] = useTexture(frame02);
  const [texture03, , ,] = useTexture(frame03);
  const [texture04, , ,] = useTexture(frame04);
  const [texture05, , ,] = useTexture(frame05);
  const [texture06, , ,] = useTexture(frame06);
  const [texture07, , ,] = useTexture(frame07);
  const [texture08, , ,] = useTexture(frame08);
  const [texture09, , ,] = useTexture(frame09);
  const [texture10, , ,] = useTexture(frame10);
  const [texture11, , ,] = useTexture(frame11);
  const [texture12, , ,] = useTexture(frame12);
  const [texture13, , ,] = useTexture(frame13);
  const [texture14, , ,] = useTexture(frame14);
  const [texture15, , ,] = useTexture(frame15);

  const animation = [
    texture01,
    texture02,
    texture03,
    texture04,
    texture05,
    texture06,
    texture07,
    texture08,
    texture09,
    texture10,
    texture11,
    texture12,
    texture13,
    texture14,
    texture15,
  ];

  return [animation, ratio, scale];
};

export default useIdle;
