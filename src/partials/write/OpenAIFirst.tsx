import { Flex } from "src/elements";
import { FirstOpenAIMsg } from "src/partials/write";

const OpenAIFirst = () => {
  return (
    <Flex className="w-full">
      <FirstOpenAIMsg msg="Yes I am OpenAI, Wassup? Or, more politely, how may i help you?" />
    </Flex>
  );
};

export default OpenAIFirst;
