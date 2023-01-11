const uniqueArray = <T>(arr: T[] | undefined) => {
  const filteredArr = arr?.filter((item, i) => arr.indexOf(item) === i);
  return new Set<T>(filteredArr);
};

export default uniqueArray;
