import React, { forwardRef } from "react";
import { dark } from "src/lib";
import { TTextTag, TClassName, TDarkClasses, TChildren } from "src/models";

type Props = {
  tagName?: TTextTag;
  children: TChildren;
  className?: TClassName;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
};

const Text: React.FC<Props> = forwardRef((props, ref) => {
  const { tagName, children, className, lightClasses, darkClasses } = props;

  return React.createElement(
    tagName || "div",
    {
      ref,
      className: tagName
        ? dark({ lightClasses, darkClasses, className })
        : "text-base font-normal",
    },
    children
  );
});

export default Text;
