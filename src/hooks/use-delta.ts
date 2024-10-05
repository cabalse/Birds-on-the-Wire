import { Clock } from "three";

const useDelta = () => {
  const clock = new Clock();

  return (speed: number, value: number) => {
    return value + speed * clock.getDelta();
  };
};

export default useDelta;
