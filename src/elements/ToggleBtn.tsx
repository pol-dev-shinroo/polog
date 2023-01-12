import { motion } from "framer-motion";
import styled from "styled-components";
import { Flex, Box, Btn } from "src/elements";
import { useDark } from "src/hooks";
import { Moon, Sun, Computer } from "src/svg";

const ToggleBtn = () => {
  const { isDark, toggleDark } = useDark();
  return (
    <StSwitchContainer
      className="switch"
      data-isOn={isDark}
      onClick={toggleDark}
    >
      <StHandle layout transition={spring} />
      <StIconsContainer className="absolute top-0 left-0 z-index:-1">
        <Moon className="w-6 h-6" />
      </StIconsContainer>
      <StIconsContainer className="absolute top-0 right-0 z-index:-1">
        <Sun className="w-6 h-6" />
      </StIconsContainer>
    </StSwitchContainer>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const StSwitchContainer = styled(motion.div)`
  width: 70px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

const StHandle = styled(motion.div)`
  width: 35px;
  height: 30px;
  background-color: white;
  border-radius: 40px;
  position: relative;
  z-index: 1;
`;

const StIconsContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 3px;
`;

export default ToggleBtn;
