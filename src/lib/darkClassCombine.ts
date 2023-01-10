interface IDarkClass {
  darkClasses?: string[];
  lightClasses?: string[];
  className?: string;
}

const darkClassesCombine = ({
  darkClasses,
  lightClasses,
  className,
}: IDarkClass) => {
  const newDark = darkClasses?.map((item) => {
    return "dark:" + item;
  });
  return lightClasses?.join(" ") + " " + newDark?.join(" ") + " " + className;
};

export default darkClassesCombine;
