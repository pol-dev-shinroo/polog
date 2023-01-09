import React from "react";
import tw from "tailwind-styled-components";
import { flex } from "./lib";
import { Justify, Align, Direction } from "./types/flex";

function App() {
  return (
    <>
      <Container $align="center" $justify="center" $direction="column">
        This text will be red
      </Container>
    </>
  );
}

interface ContainerProps {
  $align?: Align;
  $justify?: Justify;
  $direction?: Direction;
}

const Container = tw.div<ContainerProps>`
  ${({ $align, $justify, $direction }) =>
    flex({ $justify, $align, $direction })}
`;

export default App;
