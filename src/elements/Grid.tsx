import React from "react";
import { styled } from "twin.macro";
import { Align, Justify, Direction } from "../models/types/flex";
import { flex, dark } from "../lib/";

interface GridProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  className?: string;
  children?: React.ReactNode;
  darkMode?: boolean;
}
interface ContainerProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
}

const Grid = ({
  align,
  justify,
  direction,
  className,
  children,
  darkMode,
}: GridProps) => {
  return (
    <Container
      align={align}
      justify={justify}
      direction={direction}
      className={dark(darkMode, className)}
    >
      {children}
    </Container>
  );
};

const Container = styled.div(
  ({ align, justify, direction }: ContainerProps) => [
    ...flex({ align, justify, direction }),
  ]
);

export default Grid;
