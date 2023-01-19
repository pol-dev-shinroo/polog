import { Flex, Text } from "src/elements";
import { useTextArea } from "src/hooks";

const RightBox = () => {
  const { writeHeading } = useTextArea();
  return (
    <Flex direction="col" className="w-1/2 border-8 border-purple-700">
      <Flex className="w-full h-20 border-8 border-blue-700">
        <Text>{writeHeading}</Text>
      </Flex>
    </Flex>
  );
};

export default RightBox;
