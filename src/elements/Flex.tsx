import { styled } from "twin.macro";
import {
  Align,
  Justify,
  Direction,
  TClassName,
  TDarkClasses,
  TChildren,
  TOnClick,
  TTransitionClass,
} from "src/models";
import { flex, dark, transition, classCombine } from "src/lib/";

interface FlexProps {
  onClick?: TOnClick;
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  className?: TClassName;
  children?: TChildren;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
}
interface ContainerProps {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
}

const Flex = ({
  onClick,
  align,
  justify,
  direction,
  className,
  children,
  lightClasses,
  darkClasses,
  transitionClasses,
}: FlexProps) => {
  return (
    <Container
      align={align}
      justify={justify}
      direction={direction}
      className={classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
      })}
      onClick={onClick}
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
