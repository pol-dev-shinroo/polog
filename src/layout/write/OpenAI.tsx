import { useToggleWrite, useHeight } from "src/hooks";
import { FramerFlex, Flex } from "src/elements";
import { FirstOpenAIMsg } from "src/partials/write";

const OpenAI = () => {
  const { toggleAI } = useToggleWrite();
  const { height } = useHeight();

  if (toggleAI) {
    return (
      <FramerFlex
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
        <Flex>Input</Flex>
      </FramerFlex>
    );
  } else {
    return null;
  }
};

export default OpenAI;
