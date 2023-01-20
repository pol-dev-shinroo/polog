import { Flex, FramerBtn } from "src/elements";
import { OpenAITextAreaInput } from "src/components";
import { Send } from "src/svg";

const OpenAIInput = () => {
  return (
    <Flex className="w-full">
      <Flex className="w-full text-lg text-slate-50 border pl-3">
        <OpenAITextAreaInput />
        <Flex justify="end" direction="col">
          <FramerBtn
            onClick={() => {}}
            whileHover={hover}
            whileTap={tap}
            className="w-6 h-6"
          >
            <Send darkFill="#FFFFFF" lightFill="#FFFFFF" className="w-6 h-6" />
          </FramerBtn>
        </Flex>
      </Flex>
    </Flex>
  );
};

const hover = {
  scale: 1.1,
};

const tap = {
  scale: 0.9,
};

export default OpenAIInput;
