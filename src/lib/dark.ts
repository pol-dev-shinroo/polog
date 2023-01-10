interface IDark {
  (darkMode?: boolean, className?: string): string | undefined;
}

const dark: IDark = (darkMode, className) => {
  if (darkMode) {
    return className + " dark";
  } else {
    return className;
  }
};

export default dark;
