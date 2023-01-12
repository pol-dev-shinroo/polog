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
      <Flex
        lightClasses={["g-indigo-50"]}
        darkClasses={["dark:bg-zinc-900"]}
        className="h-screen w-screen transition-all duration-700"
      >
        <Header />
      </Flex>
    </Dark>
  );
}

export default App;
