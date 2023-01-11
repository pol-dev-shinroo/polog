import { useState } from "react";
import { Grid, Dark, Text } from "./elements";

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
        darkClasses={["dark:bg-stone-700"]}
        className="h-screen transition"
      >
        <Text
          tagName="h1"
          lightClasses={["text-gray-800"]}
          darkClasses={["dark:text-gray-200"]}
          className="font-bold text-xl mb-2 "
        >
          Welcome to Polog
        </Text>
        <Text tagName="h1">Welcome to Polog</Text>
        <Text tagName="h1">Welcome to Polog</Text>
        <Text tagName="h1">Welcome to Polog</Text>
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
