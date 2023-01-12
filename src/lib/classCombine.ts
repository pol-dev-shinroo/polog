import { TClassName, TPosition, TZindex } from "src/models";

interface IClassComb {
  transition?: string;
  dark?: string;
  className?: TClassName;
  position?: TPosition;
  zIndex?: TZindex;
}

const classCombine = ({
  transition,
  dark,
  className,
  position,
  zIndex,
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
  if (className) {
    newClasses += className + " ";
  }

  return newClasses;
};

export default classCombine;
