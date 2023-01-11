import React from "react";
import { Flex } from "src/elements";
import { HeaderTitle, HeaderMenu, HeaderSet } from "src/components";

const Header = () => {
  return (
    <Flex
      align="center"
      justify="between"
      lightClasses={["bg-neutral-50"]}
      darkClasses={["dark:bg-zinc-700"]}
      className="h-12 w-full p-1 flex-wrap shadow shadow-gray-500"
    >
      <HeaderTitle />
      <HeaderMenu />
      <HeaderSet />
    </Flex>
  );
};

export default Header;
