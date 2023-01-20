import { Svg } from "src/elements";
import { ISvg } from "src/elements/Svg";

const Send = ({
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
        "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      }
    />
  );
};

export default Send;
