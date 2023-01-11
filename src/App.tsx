import { useState } from "react";
import { Grid, Dark } from "./elements";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <Dark dark={isDark}>
      <Grid
        align="center"
        justify="center"
        direction="col"
        lightClasses={["bg-orange-50"]}
        darkClasses={["bg-stone-700"]}
        className="h-screen transition"
      >
        <h1 className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
          Hello world
        </h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <button
          onClick={toggleDark}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          toggle
        </button>
      </Grid>
    </Dark>
  );
}

export default App;
