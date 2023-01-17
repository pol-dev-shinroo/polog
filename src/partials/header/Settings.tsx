import { Flex, Box, FramerBtn } from "src/elements";
import { DarkModeToggle } from "src/components";
import { useRouter } from "src/hooks";

const Settings = () => {
  const { handleNavigate } = useRouter();
  return (
    <Box className="text-white flex-1 w-1/3 h-full">
      <Flex
        align="center"
        justify="center"
        className="h-full w-full border border-red-600"
      >
        <Flex
          align="center"
          justify="end"
          className="w-1/3 h-full border border-red-600"
        >
          <DarkModeToggle />
        </Flex>
        <Flex
          align="center"
          justify="center"
          className="w-2/3 h-full px-10 border border-red-600"
        >
          <Flex
            align="center"
            justify="center"
            className="w-1/2 h-full border border-red-600"
          >
            <FramerBtn
              onClick={() => handleNavigate("write")}
              whileHover={hover}
              whileTap={tap}
              lightClasses={["text-slate-900", "bg-green-300"]}
              darkClasses={["dark:text-slate-50", "dark:bg-sky-300"]}
              className="w-full h-2/3 bg-opacity-70 text-lg rounded-lg hover:font-bold"
            >
              Write
            </FramerBtn>
          </Flex>
          <Flex
            align="center"
            justify="center"
            className="w-1/2 h-full border border-red-600"
          >
            <FramerBtn
              onClick={() => {}}
              whileHover={hover}
              whileTap={tap}
              lightClasses={["text-slate-900", "bg-green-300"]}
              darkClasses={["dark:text-slate-50", "dark:bg-sky-300"]}
              className="w-12 h-12 rounded-full mr-2 border border-red-600"
            >
              <Box className=""></Box>
            </FramerBtn>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const hover = {
  scale: 1.1,
};

const tap = {
  scale: 0.9,
};

export default Settings;
