import { Svg } from "src/elements";
import { ISvg } from "src/elements/Svg";

const Alarm = ({
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
      lightFill={lightFill}
      darkFill={darkFill}
      lightClasses={lightClasses}
      darkClasses={darkClasses}
      transitionClasses={transitionClasses}
      svgPath={
        "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      }
    />
  );
};

export default Alarm;
