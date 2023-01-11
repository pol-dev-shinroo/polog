import React from "react";
import { styled } from "twin.macro";
import {
  Align,
  Justify,
  Direction,
  TClassName,
  TDarkClasses,
} from "src/models";
import { flex, dark } from "src/lib/";

interface GridProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  className?: TClassName;
  children?: React.ReactNode;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
}
interface ContainerProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
}

const Flex = ({
  align,
  justify,
  direction,
  className,
  children,
  lightClasses,
  darkClasses,
}: GridProps) => {
  return (
    <Container
      align={align}
      justify={justify}
      direction={direction}
      className={dark({ lightClasses, darkClasses, className })}
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

export default Flex;
