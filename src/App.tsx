import React from "react";
import tw from "tailwind-styled-components";
import { flex } from "./lib";

function App() {
  return (
    <>
      <Container>This text will be red</Container>
    </>
  );
}

const Container = tw.div`
  ${() => flex({ justify: "center", align: "center", direction: "column" })}
  
`;

export default App;
