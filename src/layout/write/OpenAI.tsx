import { useToggleWrite, useHeight, useOpenAIInput } from "src/hooks";
import { Flex } from "src/elements";
import { OpenAIFirst, OpenAIChat, OpenAIInput } from "src/partials/write";

const OpenAI = () => {
  const { toggleAI } = useToggleWrite();
  const { height } = useHeight();
  const { chatArr } = useOpenAIInput();

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
          <Flex
            justify="start"
            direction="col"
            className="w-full h-full overflow-y-scroll"
          >
            {chatArr.map((item, idx) => {
              const { text, type } = item;
              return <OpenAIChat id={idx} text={text} type={type} />;
            })}
          </Flex>

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
