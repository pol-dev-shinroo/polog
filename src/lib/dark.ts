const dark = (props: string[]): string => {
  console.log(props);
  return props.map((s) => `dark:${s}`).join(" ");
};

export default dark;
