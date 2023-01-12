import { styled } from "twin.macro";
import { motion } from "framer-motion";
import { ToggleBtn, FramerFlex } from "src/elements";
import { useDark } from "src/hooks";

const DarkModeToggle = () => {
  const { isDark, toggleDark } = useDark();
  return (
    // <Flex
    //   align="center"
    //   justify="start"
    //   lightClasses={["bg-orange-200"]}
    //   darkClasses={["dark:bg-slate-200"]}
    //   transitionClasses={["transition-all", "duration-700"]}
    //   positionClasses="relative"
    //   className="switch w-16 h-7 rounded-3xl cursor-pointer overflow-hidden"
    //   onClick={toggleDark}
    //   data-isOn={isDark}
    // >
    //   <StHandle layout transition={spring} />
    // </Flex>
    <FramerFlex
      align="center"
      justify="start"
      lightClasses={["bg-orange-200"]}
      darkClasses={["dark:bg-slate-200"]}
      transitionClasses={["transition-all", "duration-700"]}
      positionClasses="relative"
      className="switch w-16 h-7 rounded-3xl cursor-pointer overflow-hidden"
      onClick={toggleDark}
      data-isOn={isDark}
    ></FramerFlex>
    // <ToggleBtn />
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const StHandle = styled(motion.div)`
  width: 35px;
  height: 30px;
  background-color: white;
  border-radius: 40px;
  position: relative;
  z-index: 1;
`;

export default DarkModeToggle;
