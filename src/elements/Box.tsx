import React, { forwardRef } from "react";
import { dark, transition, classCombine } from "src/lib";
import {
  TClassName,
  TDarkClasses,
  TBoxTag,
  TChildren,
  TTransitionClass,
} from "src/models";

type TBox = {
  tagName?: TBoxTag;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  children?: TChildren;
};

const Box: React.FC<TBox> = forwardRef((props, ref) => {
  const {
    tagName,
    children,
    className,
    lightClasses,
    darkClasses,
    transitionClasses,
  } = props;

  return React.createElement(
    tagName || "div",
    {
      ref,
      className: classCombine({
        transition: transition(transitionClasses),
        dark: dark(lightClasses, darkClasses),
        className,
      }),
    },
    children
  );
});

export default Box;
