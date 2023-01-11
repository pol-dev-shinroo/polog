interface IDarkComb {
  className?: string;
  uniqueLight?: Set<string>;
  darkConverted?: string[];
}

const darkComb = ({ className, uniqueLight, darkConverted }: IDarkComb) => {
  const classNames = Array.from(uniqueLight ?? [])
    .concat(darkConverted ?? [])
    .join(" ");
  return className ? `${className} ${classNames}` : classNames;
};

export default darkComb;
