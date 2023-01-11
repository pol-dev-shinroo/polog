interface IDark {
  lightClasses?: string[];
  darkClasses?: string[];
  className?: string;
}

const dark = ({ lightClasses, darkClasses, className }: IDark) => {
  let newClasses = "";
  const lightString = lightClasses?.join(" ");
  if (lightString) {
    newClasses += lightString + " ";
  }
  const darkString = darkClasses?.join(" ");
  if (darkString) {
    newClasses += darkString + " ";
  }
  if (className) {
    newClasses += className + " ";
  }

  return newClasses;
};

export default dark;
