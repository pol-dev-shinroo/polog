import { styled } from "twin.macro";
import {
  TClassName,
  TDarkClasses,
  TChildren,
  TOnClick,
  TTransitionClass,
  TPosition,
  TZindex,
  TGrid,
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
    >
      {children}
    </StGrid>
  );
};

const StGrid = styled.div``;

export default Grid;
