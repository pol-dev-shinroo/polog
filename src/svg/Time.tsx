import {
  TClassName,
  TOnClick,
  TFill,
  TDarkClasses,
  TTransitionClass,
  TDarkProp,
} from "src/models";
import { dark, transition, classCombine } from "src/lib";
interface ITime {
  onClick?: TOnClick;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  isDark?: TDarkProp;
  lightFill?: TFill;
  darkFill?: TFill;
  transitionClasses?: TTransitionClass;
}

const Time = ({
  onClick,
  className,
  lightClasses,
  darkClasses,
  lightFill,
  darkFill,
  isDark,
  transitionClasses,
}: ITime) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill={isDark ? darkFill : lightFill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
      })}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default Time;
