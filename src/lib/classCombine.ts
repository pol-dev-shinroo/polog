import { TClassName, TPosition, TZindex, TGrid } from "src/models";

interface IClassComb {
  transition?: string;
  dark?: string;
  className?: TClassName;
  position?: TPosition;
  zIndex?: TZindex;
  grid?: TGrid;
}

const classCombine = ({
  transition,
  dark,
  className,
  position,
  zIndex,
  grid,
}: IClassComb) => {
  let newClasses = "";
  if (transition) {
    newClasses += transition + " ";
  }
  if (dark) {
    newClasses += dark + " ";
  }
  if (position) {
    newClasses += position + " ";
  }
  if (zIndex) {
    newClasses += zIndex + " ";
  }
  if (grid) {
    newClasses += grid + " ";
  }
  if (className) {
    newClasses += className + " ";
  }

  return newClasses;
};

export default classCombine;
