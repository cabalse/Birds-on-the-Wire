import { Clock } from "three";

const useDelta = () => {
  const clock = new Clock();

  return (speed: number) => {
    return speed * clock.getDelta();
  };
};

export default useDelta;
