import React from "react";
import { styled } from "twin.macro";
import { Align, Justify, Direction } from "../models/types/flex";
import { flex, uniqueArray, darkComb, darkConvert } from "../lib/";

interface GridProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  className?: string;
  children?: React.ReactNode;
  lightClasses?: string[];
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
  lightClasses,
  darkClasses,
}: GridProps) => {
  const { uniqueLight, uniqueDark } = {
    uniqueLight: uniqueArray<string>(lightClasses),
    uniqueDark: uniqueArray<string>(darkClasses),
  };

  const darkConverted = darkConvert({ uniqueDark });

  return (
    <Container
      align={align}
      justify={justify}
      direction={direction}
      className={darkComb({ uniqueLight, darkConverted, className })}
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
