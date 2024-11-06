import Alien from "./alien";

const scale = 100;
const frameSpeed = 0.2;

type Props = {
  facing: "left" | "right";
};

const Player = ({ facing }: Props) => {
  return (
    <group position={[0, 0, 0]}>
      <Alien
        scale={scale}
        frameSpeed={frameSpeed}
        animation={"flight"}
        direction={facing}
      />
    </group>
  );
};

export default Player;
