import React from "react";
import { styled } from "twin.macro";
import { Align, Justify, Direction } from "../models/types/flex";
import { flex, dark, darkClassesCombine } from "../lib/";

interface GridProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  className?: string;
  children?: React.ReactNode;
  darkMode?: boolean;
  lightClasses?: string[]; // set 으로 바꾸기! (중복 방지)
  darkClasses?: string[];
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
  lightClasses,
  darkClasses,
}: GridProps) => {
  const newClasses = darkClassesCombine({
    lightClasses,
    darkClasses,
    className,
  });
  return (
    <Container
      align={align}
      justify={justify}
      direction={direction}
      className={dark(darkMode, newClasses)}
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
