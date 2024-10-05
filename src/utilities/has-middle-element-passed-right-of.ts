import findMiddelElement from "./find-middle-element";

const hasMiddleElementPassedRightOf = (
  elems: number[],
  valueX: number
): boolean => {
  const elem = findMiddelElement([elems[0], elems[1], elems[2]]);
  return elems[elem - 1] > valueX;
};

export default hasMiddleElementPassedRightOf;
