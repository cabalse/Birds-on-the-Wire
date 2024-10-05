const findMiddelElement = (elems: number[]): number => {
  let middleElement = 1;
  if (elems[0] > elems[1] && elems[0] < elems[2]) {
    middleElement = 1;
  } else if (elems[1] > elems[0] && elems[1] < elems[2]) {
    middleElement = 2;
  } else {
    middleElement = 3;
  }
  return middleElement;
};

export default findMiddelElement;
