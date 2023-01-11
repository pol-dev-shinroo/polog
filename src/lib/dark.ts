interface IDark {
  lightClasses?: string[];
  darkClasses?: string[];
  className?: string;
}

const dark = ({ lightClasses, darkClasses, className }: IDark) => {
  const lightString = lightClasses?.join(" ");
  const darkString = darkClasses?.join(" ");
  const newClasses = className + " " + lightString + " " + darkString;
  return newClasses;
};

export default dark;
