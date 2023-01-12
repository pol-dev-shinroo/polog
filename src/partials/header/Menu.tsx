import { useState } from "react";
import { Flex, Box, FramerFlex, Framer } from "src/elements";
import { Community, Fire, Time } from "src/svg";
import { useDark } from "src/hooks";

const Menu = () => {
  const { isDark } = useDark();
  const [activeIcon, setActiveIcon] = useState("icon1");
  return (
    <Box className="w-1/2 h-full">
      <Flex align="center" justify="center" className="h-full w-full">
        <Flex
          align="center"
          justify="between"
          positionClasses="relative"
          className="h-full w-1/4"
        >
          <FramerFlex
            align="center"
            justify="center"
            className="w-7 h-7 cursor-pointer"
          >
            <Community
              onClick={() => setActiveIcon("icon1")}
              isDark={isDark}
              lightFill="none"
              darkFill="#f5f6f8"
              transitionClasses={["transition-all", "duration-700"]}
              className="w-10 h-8 shadow-md shadow-gray-500 rounded-lg text-gray-200"
            />
          </FramerFlex>
          <FramerFlex
            align="center"
            justify="center"
            className="w-7 h-7 cursor-pointer"
          >
            <Fire
              onClick={() => setActiveIcon("icon2")}
              isDark={isDark}
              lightFill="#f97316"
              darkFill="#facc15"
              transitionClasses={["transition-all", "duration-700"]}
              className="w-10 h-8 shadow-md shadow-gray-500 "
            />
          </FramerFlex>
          <FramerFlex
            align="center"
            justify="center"
            className="w-7 h-7 cursor-pointer"
          >
            <Time
              onClick={() => setActiveIcon("icon3")}
              isDark={isDark}
              lightFill="none"
              darkFill="none"
              transitionClasses={["transition-all", "duration-700"]}
              className="w-10 h-8 shadow-md shadow-gray-500 text-gray-200"
            />
          </FramerFlex>
          <Framer
            positionClasses="absolute"
            framerInitial={{ left: 0 }}
            framerAnimate={{
              left:
                activeIcon === "icon1" ? 0 : activeIcon === "icon2" ? 30 : 60,
            }}
            framertransition={{
              type: "tween",
              duration: 0.5,
              ease: "easeOut",
            }}
            className="bottom-0 bg-white w-7 h-0.5"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Menu;
