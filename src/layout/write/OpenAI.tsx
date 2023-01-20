import { useToggleWrite, useHeight } from "src/hooks";
import { Flex } from "src/elements";
import { FirstOpenAIMsg } from "src/partials/write";

const OpenAI = () => {
  const { toggleAI } = useToggleWrite();
  const { height } = useHeight();

  if (toggleAI) {
    return (
      <Flex
        align="center"
        justify="start"
        direction="col"
        className="h-screen w-1/2"
        style={{
          backgroundColor: "#0d1117",
          height: height - 64,
        }}
      >
        <FirstOpenAIMsg msg="Hello, how may i help you?" />
        <Flex className="w-full text-slate-50 border-8 border-slate-200">
          Input
        </Flex>
      </Flex>
    );
  } else {
    return null;
  }
};

export default OpenAI;
