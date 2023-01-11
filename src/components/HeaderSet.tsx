import React from "react";
import { Flex, Box, Btn } from "src/elements";
import { useDark } from "src/hooks";

const HeaderSet = () => {
  const { toggleDark } = useDark();
  return (
    <Box className="text-white flex-1 w-1/3 h-full">
      <Flex align="center" justify="center" className="h-full w-full">
        <Btn
          onClick={toggleDark}
          lightClasses={["text-gray-800"]}
          darkClasses={["dark:text-gray-300"]}
          className="text-gray-800"
        >
          다크모드
        </Btn>
      </Flex>
    </Box>
  );
};

export default HeaderSet;
