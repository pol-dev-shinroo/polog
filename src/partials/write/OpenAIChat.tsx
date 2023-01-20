import { useState, useEffect } from "react";
import { Flex, Framer } from "src/elements";
import { useGenerateText, useToggleWrite, useNoLineBreaker } from "src/hooks";

interface IOpenAIChat {
  id: number;
  text: string;
  type: "user" | "ai";
}

const OpenAIChat = ({ text, type }: IOpenAIChat) => {
  const { regexedText } = useNoLineBreaker(text);
  const { toggleAtLeastOnce, setToggleAtLeastOnce } = useToggleWrite();
  const { currentText, indexRef, totalLength } = useGenerateText(
    regexedText,
    10
  );
  const [finalText, setFinalText] = useState("");

  useEffect(() => {
    const handleFinalText = () => {
      setFinalText((prev) => prev + currentText);
    };
    handleFinalText();

    if (indexRef.current === totalLength) {
      setToggleAtLeastOnce(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentText, setToggleAtLeastOnce, toggleAtLeastOnce]);

  return (
    <Flex justify="start" className="w-full text-slate-50">
      <Flex className="w-full h-auto pl-5">
        <Flex justify="center" direction="col" className="">
          {type === "ai" ? (
            <Framer className="text-2xl rounded-lg w-10 h-10">🤖</Framer>
          ) : (
            <Framer className="text-2xl rounded-lg w-10 h-10">😛</Framer>
          )}
        </Flex>
        <Flex className="break-normal p-10">
          <Flex className="whitespace-pre-wrap break-words text-green-400">
            {finalText}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OpenAIChat;
