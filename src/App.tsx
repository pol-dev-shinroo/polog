import { BrowserRouter } from "react-router-dom";
import Router from "src/routes/Router";
import { Dark, Box } from "src/elements";
import { useDark } from "src/hooks";

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
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Box>
    </Dark>
  );
}

export default App;
