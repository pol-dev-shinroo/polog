import { Svg } from "src/elements";
import { ISvg } from "src/elements/Svg";

const Moon = ({
  onClick,
  className,
  lightClasses,
  darkClasses,
  lightFill,
  darkFill,
  isDark,
  transitionClasses,
}: ISvg) => {
  return (
    <Svg
      onClick={onClick}
      isDark={isDark}
      className={className}
      lightFill={"#f8db84"}
      darkFill={"#f8db84"}
      lightClasses={lightClasses}
      darkClasses={darkClasses}
      transitionClasses={transitionClasses}
      svgPath={
        "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      }
    />
  );
};

export default Moon;
