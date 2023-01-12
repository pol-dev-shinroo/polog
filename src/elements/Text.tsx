import React, { forwardRef } from "react";
import { dark, transition, classCombine } from "src/lib";
import {
  TTextTag,
  TClassName,
  TDarkClasses,
  TChildren,
  TTransitionClass,
} from "src/models";

type Props = {
  tagName?: TTextTag;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  transitionClasses?: TTransitionClass;
  children: TChildren;
};

const Text: React.FC<Props> = forwardRef((props, ref) => {
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
      className: tagName
        ? classCombine({
            transition: transition(transitionClasses),
            dark: dark(lightClasses, darkClasses),
            className,
          })
        : "text-base font-normal",
    },
    children
  );
});

export default Text;
