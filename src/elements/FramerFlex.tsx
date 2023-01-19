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
  TZindex,
  TLayout,
  TTransition,
  TAnimate,
  TInitial,
  TExit,
  TWhileHover,
  TWhileTap,
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
  zIndex?: TZindex;
  children?: TChildren;
  ref?: any;
  /** framer props */
  layout?: TLayout;
  Framertransition?: TTransition;
  framertransition?: TTransition;
  framerAnimate?: TAnimate;
  framerInitial?: TInitial;
  framerExit?: TExit;
  whileHover?: TWhileHover;
  whileTap?: TWhileTap;
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
  zIndex,
  children,
  ref,
  /** framer props */
  layout,
  framertransition,
  framerAnimate,
  framerInitial,
  framerExit,
  whileHover,
  whileTap,
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
        className,
        position: positionClasses,
        zIndex: zIndex,
      })}
      layout={layout}
      transition={framertransition}
      animate={framerAnimate}
      initial={framerInitial}
      exit={framerExit}
      whileHover={whileHover}
      whileTap={whileTap}
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
