import React, { forwardRef } from "react";
import { dark } from "src/lib";
import { TClassName, TDarkClasses, TBoxTag, TChildren } from "src/models";

type TBox = {
  tagName?: TBoxTag;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
  children?: TChildren;
};

const Box: React.FC<TBox> = forwardRef((props, ref) => {
  const { tagName, children, className, lightClasses, darkClasses } = props;

  return React.createElement(
    tagName || "div",
    {
      ref,
      className: dark({ lightClasses, darkClasses, className }),
    },
    children
  );
});

export default Box;
