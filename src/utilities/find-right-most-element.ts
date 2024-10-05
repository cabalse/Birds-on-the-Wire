const findRightMostElement = (elems: number[]): number => {
  let rightMostElement = 1;
  if (elems[0] > elems[1] && elems[0] > elems[2]) {
    rightMostElement = 1;
  } else if (elems[1] > elems[0] && elems[1] > elems[2]) {
    rightMostElement = 2;
  } else {
    rightMostElement = 3;
  }
  return rightMostElement;
};

export default findRightMostElement;
