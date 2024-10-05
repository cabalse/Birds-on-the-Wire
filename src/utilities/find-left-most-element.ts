const findLeftMostElement = (elems: number[]): number => {
  let leftMostElement = 1;
  if (elems[0] < elems[1] && elems[0] < elems[2]) {
    leftMostElement = 1;
  } else if (elems[1] < elems[0] && elems[1] < elems[2]) {
    leftMostElement = 2;
  } else {
    leftMostElement = 3;
  }
  return leftMostElement;
};

export default findLeftMostElement;
