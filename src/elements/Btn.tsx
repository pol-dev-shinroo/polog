import { dark, transition, classCombine } from "src/lib";
import {
  TClassName,
  TOnClick,
  TChildren,
  TDarkClasses,
  TTransitionClass,
} from "src/models";

interface IBtn {
  onClick?: TOnClick;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  children?: TChildren;
}

const Btn = ({
  onClick,
  className,
  children,
  lightClasses,
  darkClasses,
  transitionClasses,
}: IBtn) => {
  return (
    <button
      onClick={onClick}
      className={classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
      })}
    >
      {children}
    </button>
  );
};

export default Btn;
