import { Flex, Box } from "src/elements";
import { HeaderMenuUnderLine, HeaderMenuList } from "src/components";

const Menu = () => {
  return (
    <Box className="w-1/2 h-full">
      <Flex
        align="center"
        justify="center"
        direction="col"
        className="h-full w-full pt-3"
      >
        <HeaderMenuList />
        <HeaderMenuUnderLine />
      </Flex>
    </Box>
  );
};

export default Menu;
