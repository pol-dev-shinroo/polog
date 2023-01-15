import { Svg } from "src/elements";
import { ISvg } from "src/elements/Svg";

const Fire = ({
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
        "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
      }
    />
  );
};

export default Fire;
