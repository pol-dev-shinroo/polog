import { dark, transition, classCombine } from "src/lib";

import {
  TClassName,
  TOnClick,
  TFill,
  TDarkClasses,
  TTransitionClass,
  TDarkProp,
  TSvgPath,
} from "src/models";

export interface ISvg {
  onClick?: TOnClick;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  isDark?: TDarkProp;
  lightFill?: TFill;
  darkFill?: TFill;
  transitionClasses?: TTransitionClass;
  svgPath?: TSvgPath;
  stroke?: string;
}
const Svg = ({
  onClick,
  className,
  lightClasses,
  darkClasses,
  lightFill,
  darkFill,
  isDark,
  transitionClasses,
  svgPath,
  stroke,
}: ISvg) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill={isDark ? darkFill : lightFill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className={classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
      })}
      stroke={stroke}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
    </svg>
  );
};

export default Svg;
