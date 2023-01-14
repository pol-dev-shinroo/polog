import { styled } from "twin.macro";
import { motion } from "framer-motion";

import {
  TClassName,
  TDarkClasses,
  TChildren,
  TOnClick,
  TTransitionClass,
  TPosition,
  TZindex,
  TGrid,
  TLayout,
  TTransition,
  TAnimate,
  TInitial,
  TExit,
} from "src/models";
import { dark, transition, classCombine, grid } from "src/lib";

interface IGridProps {
  onClick?: TOnClick;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  positionClasses?: TPosition;
  zIndex?: TZindex;
  lg?: TGrid;
  md?: TGrid;
  sm?: TGrid;
  children?: TChildren;
  /** framer props */
  layout?: TLayout;
  Framertransition?: TTransition;
  framertransition?: TTransition;
  framerAnimate?: TAnimate;
  framerInitial?: TInitial;
  framerExit?: TExit;
}

const Grid = ({
  onClick,
  className,
  lightClasses,
  darkClasses,
  transitionClasses,
  positionClasses,
  zIndex,
  lg,
  md,
  sm,
  children,
  /** framer props */
  layout,
  framertransition,
  framerAnimate,
  framerInitial,
  framerExit,
}: IGridProps) => {
  return (
    <StGrid
      className={classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
        position: positionClasses,
        zIndex: zIndex,
        grid: grid(lg, md, sm),
      })}
      onClick={onClick}
      layout={layout}
      transition={framertransition}
      animate={framerAnimate}
      initial={framerInitial}
      exit={framerExit}
    >
      {children}
    </StGrid>
  );
};

const StGrid = styled(motion.div)``;

export default Grid;
