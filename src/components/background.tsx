import useTexture from "../hooks/use-texture";
import GraphicElement from "./graphic-element";
import ParallaxBackground from "./parallax-background/parallax-background";
import SlicedBackground from "./sliced-background";

import sun from "./../assets/background/sun.png";
import background_slice from "./../assets/background/sky_color.png";

type Props = {
  speeds: number[];
  moveLeft: boolean;
  moveRight: boolean;
};

const Background = ({ speeds, moveLeft, moveRight }: Props) => {
  const [sunTexture, , sunWidth, sunHeight] = useTexture(sun, 0.01);

  return (
    <>
      <SlicedBackground textureFile={background_slice} />
      <GraphicElement
        texture={sunTexture}
        width={sunWidth}
        height={sunHeight}
        position={[4, 2, 0]}
      />
      <ParallaxBackground
        speeds={speeds}
        moveLeft={moveLeft}
        moveRight={moveRight}
      />
    </>
  );
};

export default Background;
