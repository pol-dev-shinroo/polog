interface IDarkConvert {
  uniqueDark?: Set<string>;
}

const darkConvert = ({ uniqueDark }: IDarkConvert) => {
  return Array.from(uniqueDark ?? []).map((item) => `dark:${item}`);
};

export default darkConvert;
