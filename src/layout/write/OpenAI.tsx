import { useToggleWrite } from "src/hooks";
import { FramerFlex, Framer } from "src/elements";
import { FirstOpenAIMsg } from "src/partials/write";
const OpenAI = () => {
  const { toggleAI } = useToggleWrite();

  if (toggleAI) {
    return (
      <FramerFlex
        align="center"
        justify="start"
        direction="col"
        className={`h-full w-1/2 border-8 border-purple-700`}
      >
        <FirstOpenAIMsg msg="Hello, how may i help you?" />
      </FramerFlex>
    );
  } else {
    return null;
  }
};

export default OpenAI;
