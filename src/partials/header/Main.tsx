import { Flex, Box, Text } from "src/elements";

const Main = () => {
  return (
    <Box tagName="header" className="flex-1 w-1/3 h-full">
      <Flex align="center" justify="center" className="h-full w-full">
        <Text
          tagName="p"
          lightClasses={["text-gray-800"]}
          darkClasses={["dark:text-gray-300"]}
          transitionClasses={["transition-all", "duration-700"]}
          className="text-5xl text-pacifico shadow-none shadow-gray-500 hover:shadow-md border border-red-600 cursor-pointer"
        >
          Polog
        </Text>
      </Flex>
    </Box>
  );
};

export default Main;
