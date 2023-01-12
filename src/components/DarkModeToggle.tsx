import { Flex, Box } from "src/elements";
import { useDark } from "src/hooks";

const DarkModeToggle = () => {
  const { isDark, toggleDark } = useDark();
  return (
    <Flex
      align="center"
      justify="start"
      lightClasses={["bg-neutral-400"]}
      darkClasses={["dark:bg-slate-200"]}
      className="w-20 h-7 rounded-3xl relative cursor-pointer transition-all duration-700"
      onClick={toggleDark}
    >
      Hello
    </Flex>
  );
};

export default DarkModeToggle;
