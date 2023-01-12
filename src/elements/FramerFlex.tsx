import { styled } from "twin.macro";
import { motion } from "framer-motion";
import { flexFramer, dark, transition, classCombine } from "src/lib";

import {
  Align,
  Justify,
  Direction,
  TOnClick,
  TChildren,
  TClassName,
  TDarkClasses,
  TTransitionClass,
  TPosition,
  TLayout,
  TTransition,
} from "src/models";

interface IStFramerFlex {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
}

interface IFramerFlexProps {
  onClick?: TOnClick;
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  positionClasses?: TPosition;
  children?: TChildren;
  /** framer props */
  layout?: TLayout;
  Framertransition?: TTransition;
}

const FramerFlex = ({
  onClick,
  align,
  justify,
  direction,
  className,
  lightClasses,
  darkClasses,
  transitionClasses,
  positionClasses,
  children,
  /** framer props */
  layout,
  Framertransition,
}: IFramerFlexProps) => {
  return (
    <StFramerFlex
      align={align}
      justify={justify}
      direction={direction}
      onClick={onClick}
      className={classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        position: positionClasses,
        className,
      })}
      layout={layout}
      transition={Framertransition}
    >
      {children}
    </StFramerFlex>
  );
};

const StFramerFlex = styled(motion.div)`
  ${({ align, justify, direction }: IStFramerFlex) =>
    flexFramer({
      align,
      justify,
      direction,
    })}
`;

export default FramerFlex;
