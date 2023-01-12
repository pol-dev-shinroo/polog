import { TTransitionClass } from "src/models";

interface ITransition {
  (transitionClass: TTransitionClass): string;
}

const transition: ITransition = (transitionClass) => {
  let newClasses = "";
  const transitionString = transitionClass?.join(" ");
  if (transitionString) {
    newClasses += transitionString + " ";
  }

  return newClasses;
};

export default transition;
