import { BrowserRouter } from "react-router-dom";
import { Dark, Box, Flex } from "src/elements";
import { useDark } from "src/hooks";
import { Header, RightMenu, Posts, LeftMenu } from "src/layout";

function App() {
  const { isDark } = useDark();
  return (
    <Dark dark={isDark}>
      {/* Full Screen */}
      <Box
        lightClasses={["bg-gray-200"]}
        darkClasses={["dark:bg-zinc-900"]}
        transitionClasses={["transition-colors", "duration-700"]}
        className="h-full w-full"
      >
        <Header />
        <BrowserRouter>
          <Flex
            justify="between"
            direction="row"
            className="w-full pt-11 px-24 border-4 border-green-500"
          >
            <LeftMenu />
            <Posts />
            <RightMenu />
          </Flex>
        </BrowserRouter>
      </Box>
    </Dark>
  );
}

export default App;
