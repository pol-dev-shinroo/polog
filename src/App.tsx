import { Grid } from "./elements";

function App() {
  return (
    <>
      <Grid
        align="center"
        justify="center"
        direction="col"
        darkMode={true}
        lightClasses={["bg-lime-400"]}
        darkClasses={["bg-slate-800"]}
        className="h-screen transition"
      >
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
      </Grid>
    </>
  );
}

export default App;
