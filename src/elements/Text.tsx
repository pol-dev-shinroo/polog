import React, { forwardRef } from "react";
import { dark } from "../lib";

type Props = {
  tagName?: "h1" | "h2" | "h3" | "p" | "span";
  children: React.ReactNode;
  className?: string;
  lightClasses?: string[];
  darkClasses?: string[];
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
