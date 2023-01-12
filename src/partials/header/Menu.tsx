import { Flex, Box, Text } from "src/elements";

const Menu = () => {
  return (
    <Box className="w-1/2 h-full">
      <Flex align="center" justify="center" className="h-full w-full">
        <Text
          tagName="p"
          lightClasses={["text-gray-800"]}
          darkClasses={["dark:text-gray-300"]}
        >
          Menu
        </Text>
      </Flex>
    </Box>
  );
};

export default Menu;
