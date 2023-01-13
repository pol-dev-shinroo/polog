import { Flex, Box, FramerBtn } from "src/elements";

const Main = () => {
  return (
    <Box tagName="header" className="flex-1 w-1/3 h-full">
      <Flex align="center" justify="center" className="h-full w-full">
        <FramerBtn
          onClick={() => {}}
          lightClasses={["text-gray-800"]}
          darkClasses={["dark:text-gray-300"]}
          className="text-5xl text-pacifico"
          whileHover={hover}
          whileTap={tap}
        >
          Polog
        </FramerBtn>
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

export default Main;
