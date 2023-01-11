import { motion } from "framer-motion";
import { styled } from "twin.macro";
import { Flex, Dark, Box } from "src/elements";
import { useDark } from "src/hooks";

function App() {
  const { isDark, toggleDark } = useDark(false);
  return (
    <Dark dark={isDark}>
      <Flex
        align="center"
        justify="between"
        lightClasses={["bg-gray-300"]}
        darkClasses={["dark:bg-gray-800"]}
        className="h-24 w-full px-4"
      >
        <Box tagName="header" className="text-xl text-white">
          Logo + Search
        </Box>
        <Box className="text-xl text-white">Menu</Box>
        <Box className="text-xl text-white">
          <button onClick={toggleDark}>다크모드</button>
        </Box>
      </Flex>
    </Dark>
  );
}

export default App;
