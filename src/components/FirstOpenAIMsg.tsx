import { useState, useEffect } from "react";
import { Flex, Framer } from "src/elements";
import { useGenerateText, useToggleWrite } from "src/hooks";

interface IFirstOpenAIMsg {
  msg: string;
}

const FirstOpenAIMsg: React.FC<IFirstOpenAIMsg> = ({ msg }) => {
  const { toggleAtLeastOnce, setToggleAtLeastOnce } = useToggleWrite();
  const { currentText, indexRef, totalLength } = useGenerateText(msg, 10);

  const [finalText, setFinalText] = useState("");
  useEffect(() => {
    if (!toggleAtLeastOnce) {
      const handleFinalText = () => {
        setFinalText((prev) => prev + currentText);
      };
      handleFinalText();
    }
    if (indexRef.current === totalLength) {
      setToggleAtLeastOnce(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentText, setToggleAtLeastOnce, toggleAtLeastOnce]);
  return (
    <Flex justify="start" className="w-full">
      <Flex justify="center" direction="col" className="h-full pl-5">
        <Framer className="text-2xl rounded-lg w-10 h-10">🤖</Framer>
      </Flex>
      <Flex className="h-full break-normal p-10">
        <Flex className="whitespace-pre-wrap break-words text-green-400">
          {toggleAtLeastOnce ? msg : finalText}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FirstOpenAIMsg;
