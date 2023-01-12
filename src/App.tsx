import { BrowserRouter } from "react-router-dom";
import { Dark, Box } from "src/elements";
import { useDark } from "src/hooks";
import { Header } from "src/layout";

function App() {
  const { isDark } = useDark();
  return (
    <Dark dark={isDark}>
      {/* Full Screen */}
      <Box
        lightClasses={["g-indigo-50"]}
        darkClasses={["dark:bg-zinc-900"]}
        transitionClasses={["transition-colors", "duration-700"]}
        className="h-screen w-screen"
      >
        <Header />
        <BrowserRouter>
          <h1>Hello world</h1>
        </BrowserRouter>
      </Box>
    </Dark>
  );
}

export default App;
