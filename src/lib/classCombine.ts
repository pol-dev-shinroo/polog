import { TClassName, TPosition } from "src/models";

interface IClassComb {
  transition?: string;
  dark?: string;
  className?: TClassName;
  position?: TPosition;
}

const classCombine = ({
  transition,
  dark,
  className,
  position,
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
  if (className) {
    newClasses += className + " ";
  }

  return newClasses;
};

export default classCombine;
