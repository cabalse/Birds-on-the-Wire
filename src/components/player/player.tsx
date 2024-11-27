import DIRECTION from "../../constants/direction";
import PLAYER_ANIMATION from "../../constants/player-animation";
import Alien from "./alien";

const scale = 100;
const animationFrameSpeed = 0.2;

type Props = {
  facing: DIRECTION;
};

const Player = ({ facing }: Props) => {
  return (
    <group position={[0, 0, 0]}>
      <Alien
        scale={scale}
        animationFrameSpeed={animationFrameSpeed}
        animation={PLAYER_ANIMATION.FLIGHT}
        direction={facing}
      />
    </group>
  );
};

export default Player;
