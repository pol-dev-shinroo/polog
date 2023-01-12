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
        transitionClasses={["transition-colors", "duration-700"]}
        className="h-screen w-screen"
      >
        <Header />
      </Flex>
    </Dark>
  );
}

export default App;
