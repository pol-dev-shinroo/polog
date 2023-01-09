import React from "react";
import tw from "tailwind-styled-components";
import { Justify, Align, Direction } from "../types/flex";
import { Dark } from "../types/dark";
import { flex, dark } from "../lib";

const Grid = ({ children, align, justify, direction, dark }: GridProps) => {
  return (
    <Container
      $align={align}
      $justify={justify}
      $direction={direction}
      $dark={dark}
    >
      {children}
    </Container>
  );
};

interface GridProps {
  children: React.ReactNode;
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  dark?: Dark;
}

interface ContainerProps {
  $align?: Align;
  $justify?: Justify;
  $direction?: Direction;
  $dark?: Dark;
}

const Container = tw.div<ContainerProps>`
  ${({ $align, $justify, $direction }) =>
    flex({ $justify, $align, $direction })}
    bg-stone-200 "bg-slate-800"
    ${({ $dark }) => $dark && dark($dark)}
    h-screen
    transition
`;

export default Grid;
