import React from "react";

interface IDark {
  dark?: boolean | undefined;
  children?: React.ReactNode;
}

const Dark = ({ dark, children }: IDark) => {
  let darkClass = dark ? "dark" : "";
  return <div className={darkClass}>{children}</div>;
};

export default Dark;
