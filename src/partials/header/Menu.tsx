import { Flex, Box, FramerFlex, Framer } from "src/elements";
import { Community, Fire, Time } from "src/svg";
import { useDark, useIndex } from "src/hooks";

const Menu = () => {
  const { isDark } = useDark();
  const { activeIndex, handleActiveIndex } = useIndex();
  return (
    <Box className="w-1/2 h-full">
      <Flex
        align="center"
        justify="center"
        direction="col"
        className="h-full w-full pt-3"
      >
        <Flex
          align="center"
          justify="between"
          positionClasses="relative"
          className="w-3/5"
        >
          <FramerFlex
            align="center"
            justify="center"
            className="w-1/3 h-8 cursor-pointer"
          >
            <Community
              onClick={() => handleActiveIndex(0)}
              isDark={isDark}
              lightFill={`${activeIndex !== 0 ? "" : "#22d3ee"}`}
              darkFill={`${activeIndex !== 0 ? "#f1f5f9" : "#22d3ee"}`}
              transitionClasses={["transition-all", "duration-700"]}
              className={`w-full h-8 rounded-lg text-neutral-50 ${
                isDark && activeIndex !== 0 && "shadow-lg shadow-gray-500"
              }`}
            />
          </FramerFlex>
          <FramerFlex
            align="center"
            justify="center"
            className="w-1/3 h-8 cursor-pointer"
          >
            <Fire
              onClick={() => handleActiveIndex(1)}
              isDark={isDark}
              lightFill={`${activeIndex !== 1 ? "" : "#f97316"}`}
              darkFill={`${activeIndex !== 1 ? "#f1f5f9" : "#facc15"}`}
              transitionClasses={["transition-all", "duration-700"]}
              className={`w-full h-8 rounded-lg text-neutral-50 ${
                isDark && activeIndex !== 1 && "shadow-lg shadow-gray-500"
              }`}
            />
          </FramerFlex>
          <FramerFlex
            align="center"
            justify="center"
            className="w-1/3 h-8 cursor-pointer"
          >
            <Time
              onClick={() => handleActiveIndex(2)}
              isDark={isDark}
              lightFill={`${activeIndex !== 2 ? "" : "#e879f9"}`}
              darkFill={`${activeIndex !== 2 ? "#3f3f46" : "#e879f9"}`}
              transitionClasses={["transition-all", "duration-700"]}
              className={`w-full h-8 rounded-lg text-neutral-50 ${
                isDark && activeIndex !== 2 && "shadow-lg shadow-gray-500"
              }`}
            />
          </FramerFlex>
        </Flex>
        <FramerFlex
          align="center"
          justify={
            activeIndex === 0 ? "start" : activeIndex === 1 ? "center" : "end"
          }
          className=" w-3/5 py-0.5"
        >
          <Framer
            layout={true}
            framertransition={spring}
            lightClasses={["bg-slate-600"]}
            darkClasses={["dark:bg-slate-300"]}
            className="w-1/3 h-0.5"
          ></Framer>
        </FramerFlex>
      </Flex>
    </Box>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Menu;
