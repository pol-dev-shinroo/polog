import { Svg } from "src/elements";
import { ISvg } from "src/elements/Svg";

const Sun = ({
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
    <div style={{ color: "#ff7373" }}>
      <Svg
        onClick={onClick}
        isDark={isDark}
        className={className}
        lightFill={"#ff7373"}
        darkFill={"#ff7373"}
        lightClasses={lightClasses}
        darkClasses={darkClasses}
        transitionClasses={transitionClasses}
        stroke={"currentColor"}
        svgPath={
          "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        }
      />
    </div>
  );
};

// #ff7373

export default Sun;
