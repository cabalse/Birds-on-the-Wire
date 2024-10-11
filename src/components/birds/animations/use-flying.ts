import { Texture } from "three";
import useTexture from "../../../hooks/use-texture";

import flying00 from "./../../../assets/bird/flying/__seagull_flying_000.png";
import flying01 from "./../../../assets/bird/flying/__seagull_flying_001.png";
import flying02 from "./../../../assets/bird/flying/__seagull_flying_002.png";
import flying03 from "./../../../assets/bird/flying/__seagull_flying_003.png";
import flying04 from "./../../../assets/bird/flying/__seagull_flying_004.png";
import flying05 from "./../../../assets/bird/flying/__seagull_flying_005.png";
import flying06 from "./../../../assets/bird/flying/__seagull_flying_006.png";
import flying07 from "./../../../assets/bird/flying/__seagull_flying_007.png";
import flying08 from "./../../../assets/bird/flying/__seagull_flying_008.png";
import flying09 from "./../../../assets/bird/flying/__seagull_flying_009.png";

const useFlying = (): [Texture[], number] => {
  const [flyingTexture00, flyingRatio, ,] = useTexture(flying00);
  const [flyingTexture01, , ,] = useTexture(flying01);
  const [flyingTexture02, , ,] = useTexture(flying02);
  const [flyingTexture03, , ,] = useTexture(flying03);
  const [flyingTexture04, , ,] = useTexture(flying04);
  const [flyingTexture05, , ,] = useTexture(flying05);
  const [flyingTexture06, , ,] = useTexture(flying06);
  const [flyingTexture07, , ,] = useTexture(flying07);
  const [flyingTexture08, , ,] = useTexture(flying08);
  const [flyingTexture09, , ,] = useTexture(flying09);

  const flying = [
    flyingTexture00,
    flyingTexture01,
    flyingTexture02,
    flyingTexture03,
    flyingTexture04,
    flyingTexture05,
    flyingTexture06,
    flyingTexture07,
    flyingTexture08,
    flyingTexture09,
  ];

  return [flying, flyingRatio];
};

export default useFlying;
