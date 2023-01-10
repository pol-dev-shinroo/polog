import React from "react";
import tw, { styled, css } from "twin.macro";
import { Align, Justify, Direction } from "./models/types/flex";
import flex from "./lib/flex";

interface ContainerProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
}

function App() {
  return (
    <Container align="center" justify="center" direction="col">
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
    </Container>
  );
}

const Container = styled.div(
  ({ align, justify, direction }: ContainerProps) => [
    tw`
     bg-slate-500
       w-screen
       h-screen
       transition
    `,
    ...flex({ align, justify, direction }),
  ]
);

export default App;
