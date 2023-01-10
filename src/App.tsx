import { Grid } from "./elements";

function App() {
  return (
    <>
      <Grid
        align="center"
        justify="center"
        direction="col"
        darkMode={true}
        className=" bg-lime-400 h-screen transition dark:bg-slate-800"
      >
        <h1 className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
          Hello world
        </h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
      </Grid>
    </>
  );
}

export default App;
