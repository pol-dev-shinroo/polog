import { useToggleWrite, useHeight } from "src/hooks";
import { Flex } from "src/elements";
import { OpenAIFirst, OpenAIChat, OpenAIInput } from "src/partials/write";

const OpenAI = () => {
  const { toggleAI } = useToggleWrite();
  const { height } = useHeight();

  if (toggleAI) {
    return (
      <Flex
        align="center"
        direction="col"
        className="h-screen w-1/2"
        style={{
          backgroundColor: "#0d1117",
          height: height - 64,
        }}
      >
        <Flex justify="between" direction="col" className="w-full h-full">
          {/* first message */}
          <OpenAIFirst />
          {/* user message + AI messages */}
          <OpenAIChat />
          {/* Input button */}
          <OpenAIInput />
        </Flex>
      </Flex>
    );
  } else {
    return null;
  }
};

export default OpenAI;
