import { useEffect } from "react";

type Props = {
  onMovingLeft: (value: boolean) => void;
  onMovingRight: (value: boolean) => void;
};

const DetectKeyPress = ({ onMovingLeft, onMovingRight }: Props) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "a") {
        onMovingLeft(true);
      }
      if (event.key === "d") {
        onMovingRight(true);
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "a") {
        onMovingLeft(false);
      }
      if (event.key === "d") {
        onMovingRight(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return null;
};

export default DetectKeyPress;
