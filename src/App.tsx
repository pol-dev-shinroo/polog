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
        className="h-24 w-full p-2 flex-wrap"
      >
        <Box
          tagName="header"
          className="bg-indigo-500 rounded-lg text-white flex-1 w-1/3 h-full border-red-800 border-2"
        >
          <Flex
            align="center"
            justify="center"
            className="border-red-800 border-2 h-full w-full p-4"
          >
            Logo + Search
          </Flex>
        </Box>
        <Box className="bg-indigo-500 rounded-lg text-white w-1/2 h-full border-red-800 border-2">
          <Flex
            align="center"
            justify="center"
            className="border-red-800 border-2 h-full w-full p-4"
          >
            Menu
          </Flex>
        </Box>
        <Box className="bg-indigo-500 rounded-lg text-white flex-1 w-1/3 h-full border-red-800 border-2">
          <Flex
            align="center"
            justify="center"
            className="border-red-800 border-2 h-full w-full p-4"
          >
            <button onClick={toggleDark}>다크모드</button>
          </Flex>
        </Box>
      </Flex>
    </Dark>
  );
}

export default App;
