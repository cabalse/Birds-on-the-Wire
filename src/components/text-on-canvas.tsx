import { Text } from "@react-three/drei";

type Props = {
  text: string;
  position: [number, number, number];
};

const TextOnCanvas = ({ text, position }: Props) => {
  return (
    <Text
      color="black" // Text color
      fontSize={0.2} // Font size
      maxWidth={200} // Max width (in case you want multiline text)
      lineHeight={1} // Line height
      letterSpacing={0.02} // Letter spacing
      textAlign={"center"} // Text alignment
      anchorX="center" // X anchor: sets the horizontal anchor (left, center, right)
      anchorY="middle" // Y anchor: sets the vertical anchor (top, middle, bottom)
      position={position} // Position of the text
    >
      {text}
    </Text>
  );
};

export default TextOnCanvas;
