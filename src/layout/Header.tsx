import { Flex, FramerFlex } from "src/elements";
import { Menu, Main, Settings, SubHeader } from "src/partials/header";

const Header = () => {
  return (
    <Flex direction="col" positionClasses="sticky top-0">
      <Flex
        align="center"
        justify="between"
        lightClasses={["bg-neutral-50"]}
        darkClasses={["dark:bg-zinc-700"]}
        className="h-16 w-full flex-wrap shadow shadow-gray-500"
      >
        <Main />
        <Menu />
        <Settings />
      </Flex>
      <SubHeader />
    </Flex>
  );
};

export default Header;
