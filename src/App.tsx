import React from "react";
import tw from "tailwind-styled-components";

function App() {
  return <Container>This text will be red</Container>;
}

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;

export default App;
