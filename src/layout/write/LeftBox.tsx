import { Flex, Box } from "src/elements";
import { LeftHeadingTextArea } from "src/partials/write";

const LeftBox = () => {
  return (
    <Flex direction="col" className="w-1/2 border-8 border-purple-700">
      {/* heading textarea */}
      <LeftHeadingTextArea />
      {/* keywords textarea */}
      <Flex className="w-full border-8 border-blue-700"></Flex>
      {/* WYGIWYS textarea */}
      <Box className="w-full  border-8 border-purple-700"></Box>
      {/* bottom buttons */}
      <Flex className="w-full  border-8 border-blue-700"></Flex>
    </Flex>
  );
};

export default LeftBox;
