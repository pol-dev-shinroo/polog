import React, { forwardRef } from "react";
import { dark, transition, classCombine } from "src/lib";
import {
  TClassName,
  TDarkClasses,
  TBoxTag,
  TChildren,
  TTransitionClass,
  TPosition,
} from "src/models";

type TBox = {
  tagName?: TBoxTag;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  positionClasses?: TPosition;
  children?: TChildren;
};

const Box: React.FC<TBox> = forwardRef((props, ref) => {
  const {
    tagName,
    className,
    lightClasses,
    darkClasses,
    transitionClasses,
    positionClasses,
    children,
  } = props;

  return React.createElement(
    tagName || "div",
    {
      ref,
      className: classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
        position: positionClasses,
      }),
    },
    children
  );
});

export default Box;
