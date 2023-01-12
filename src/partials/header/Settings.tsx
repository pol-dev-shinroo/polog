import { Flex, Box } from "src/elements";
import { DarkModeToggle } from "src/components";

const Settings = () => {
  return (
    <Box className="text-white flex-1 w-1/3 h-full">
      <Flex align="center" justify="center" className="h-full w-full">
        <DarkModeToggle />
      </Flex>
    </Box>
  );
};

export default Settings;
