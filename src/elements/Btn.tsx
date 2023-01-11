import React from "react";
import { dark } from "src/lib";
import { TClassName, TOnClick, TChildren, TDarkClasses } from "src/models";

interface IBtn {
  onClick?: TOnClick;
  className?: TClassName;
  children?: TChildren;
  lightClasses?: TDarkClasses;
  darkClasses?: TDarkClasses;
}

const Btn = ({
  onClick,
  className,
  children,
  lightClasses,
  darkClasses,
}: IBtn) => {
  return (
    <button
      onClick={onClick}
      className={dark({ lightClasses, darkClasses, className })}
    >
      {children}
    </button>
  );
};

export default Btn;
