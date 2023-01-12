import { TClassName } from "src/models";

interface IClassComb {
  transition: string;
  dark: string;
  className?: TClassName;
}

const classCombine = ({ transition, dark, className }: IClassComb) => {
  let newClasses = "";
  if (transition) {
    newClasses += transition + " ";
  }
  if (dark) {
    newClasses += dark + " ";
  }
  if (className) {
    newClasses += className + " ";
  }

  return newClasses;
};

export default classCombine;
