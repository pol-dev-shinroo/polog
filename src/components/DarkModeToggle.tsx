import { FramerFlex, Framer } from "src/elements";
import { useDark } from "src/hooks";
import { Moon, Sun } from "src/svg";

const DarkModeToggle = () => {
  const { isDark, toggleDark } = useDark();
  return (
    <FramerFlex
      align="center"
      justify={isDark ? "end" : "start"}
      lightClasses={["bg-yellow-200"]}
      darkClasses={["dark:bg-slate-500"]}
      transitionClasses={["transition-all", "duration-700"]}
      positionClasses="relative"
      className={`switch w-16 h-7 rounded-3xl cursor-pointer overflow-hidden ${
        !isDark && "shadow-md shadow-gray-500"
      } `}
      onClick={toggleDark}
    >
      {/* The Handle */}
      <Framer
        layout={true}
        framertransition={spring}
        zIndex="z-50"
        positionClasses="relative"
        lightClasses={["bg-slate-300"]}
        darkClasses={["dark:bg-slate-300"]}
        className="shadow-md shadow-gray-500 w-8 h-8 rounded-full"
      />
      {/* Moon and Sun Svg */}
      <FramerFlex
        positionClasses="absolute"
        className="top-0 left-0 z-40 translate-y--2/4 pl-1 pt-0.5"
      >
        <Moon className="w-6 h-6" />
      </FramerFlex>
      <FramerFlex
        positionClasses="absolute"
        className="top-0 right-0 z-40 translate-y--2/4 pr-1 pt-0.5"
      >
        <Sun className="w-6 h-6" />
      </FramerFlex>
    </FramerFlex>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default DarkModeToggle;
