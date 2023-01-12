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
  TAnimate,
  TInitial,
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
  ref?: any;
  /** framer props */
  layout?: TLayout;
  Framertransition?: TTransition;
  framertransition?: TTransition;
  framerAnimate?: TAnimate;
  framerInitial?: TInitial;
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
  ref,
  /** framer props */
  layout,
  framertransition,
  framerAnimate,
  framerInitial,
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
      transition={framertransition}
      animate={framerAnimate}
      initial={framerInitial}
      ref={ref}
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
