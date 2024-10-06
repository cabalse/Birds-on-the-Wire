type Pos = { x: number; y: number };

const getRightElement = (posObj: { b1: Pos; b2: Pos; b3: Pos }) => {
  if (posObj.b1.x > posObj.b2.x && posObj.b1.x > posObj.b3.x) return "b1";
  if (posObj.b2.x > posObj.b1.x && posObj.b2.x > posObj.b3.x) return "b2";
  if (posObj.b3.x > posObj.b1.x && posObj.b3.x > posObj.b2.x) return "b3";
};

export default getRightElement;
