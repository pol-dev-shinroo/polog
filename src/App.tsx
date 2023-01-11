import { Grid, Dark } from "./elements";

function App() {
  return (
    <Dark dark={true}>
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
      </Grid>
    </Dark>
  );
}

export default App;
