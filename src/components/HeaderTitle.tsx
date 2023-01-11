import React from "react";
import { Flex, Box, Text } from "src/elements";

const HeaderTitle = () => {
  return (
    <Box tagName="header" className="flex-1 w-1/3 h-full">
      <Flex align="center" justify="center" className="h-full w-full">
        <Text
          tagName="p"
          lightClasses={["text-gray-800"]}
          darkClasses={["dark:text-gray-300"]}
          className="text-4xl text-pacifico text-indigo-600 text-shadow-md"
        >
          Polog
        </Text>
      </Flex>
    </Box>
  );
};

export default HeaderTitle;
