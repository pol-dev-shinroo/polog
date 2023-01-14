import { dark, transition, classCombine } from "src/lib";

import {
  TClassName,
  TOnClick,
  TFill,
  TDarkClasses,
  TTransitionClass,
  TDarkProp,
} from "src/models";

interface IHeart {
  onClick?: TOnClick;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  isDark?: TDarkProp;
  lightFill?: TFill;
  darkFill?: TFill;
  transitionClasses?: TTransitionClass;
}

const Heart = ({
  onClick,
  className,
  lightClasses,
  darkClasses,
  lightFill,
  darkFill,
  isDark,
  transitionClasses,
}: IHeart) => {
  return (
    <svg
      onClick={onClick}
      fill={isDark ? darkFill : lightFill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className={classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
      })}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
};

export default Heart;
