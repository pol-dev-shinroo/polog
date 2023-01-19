import { Flex, Box, TextArea } from "src/elements";
import { useTextArea } from "src/hooks";

const LeftBox = () => {
  const { handleHeading, writeHeading } = useTextArea();

  return (
    <Flex direction="col" className="w-1/2 border-8 border-purple-700">
      {/* heading textarea */}
      <Flex className="w-full border-8 border-blue-700">
        <TextArea
          onChange={handleHeading}
          value={writeHeading}
          maxRows={4}
          className="w-full text-4xl font-bold bg-gray-900 text-slate-50 border-8 border-yellow-400"
        ></TextArea>
      </Flex>
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
