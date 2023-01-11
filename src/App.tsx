// import { motion } from "framer-motion";
// import { styled } from "twin.macro";
import { Dark, Flex } from "src/elements";
import { useDark } from "src/hooks";
import { Header } from "src/layout";

function App() {
  const { isDark } = useDark();
  return (
    <Dark dark={isDark}>
      {/* Full Screen */}
      <Flex className="h-screen w-screen bg-indigo-50 dark:bg-zinc-900">
        <Header />
      </Flex>
    </Dark>
  );
}

export default App;
