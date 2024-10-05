import InfinitScrollBackground from "./infinit-scroll-background";

import back from "./../../assets/background/mid_ground_cloud_1.png";
import mid from "./../../assets/background/mid_ground_cloud_2.png";
import mountains from "./../../assets/background/farground_mountains.png";

type Props = {
  speeds: number[];
  moveLeft: boolean;
  moveRight: boolean;
};

const ParallaxBackground = ({ speeds, moveLeft, moveRight }: Props) => {
  return (
    <>
      <InfinitScrollBackground
        textureFile={back}
        moveLeft={moveLeft}
        moveRight={moveRight}
        speed={speeds[0]}
      />
      <InfinitScrollBackground
        textureFile={mid}
        moveLeft={moveLeft}
        moveRight={moveRight}
        speed={speeds[1]}
        offSet={[0, -1]}
      />
      <InfinitScrollBackground
        textureFile={mountains}
        moveLeft={moveLeft}
        moveRight={moveRight}
        speed={speeds[2]}
        offSet={[0, -3]}
      />
    </>
  );
};

export default ParallaxBackground;
