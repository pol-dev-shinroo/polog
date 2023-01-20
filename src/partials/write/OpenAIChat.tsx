import { useState, useEffect } from "react";
import { Flex, Framer } from "src/elements";
import { useGenerateText, useToggleWrite, useNoLineBreaker } from "src/hooks";

const OpenAIChat = () => {
  const text =
    "\n\nHead: Sunhat, Ponytail \nTop: Tank Tops, Short Sleeve Blouses, Strappy Camisole \nPants: Crop Jeans, Bermuda Shorts, High Waisted Skirt \nShoes: Sandals, Flip Flops, Sneakers \nAccessories: Sunglasses, Scarf, Belt";

  const { regexedText } = useNoLineBreaker(text);
  const { toggleAtLeastOnce, setToggleAtLeastOnce } = useToggleWrite();
  const { currentText, indexRef, totalLength } = useGenerateText(
    regexedText,
    10
  );
  console.log(currentText);
  const [finalText, setFinalText] = useState("");
  console.log(finalText);
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
    <Flex justify="start" className="w-full border text-slate-50">
      <Flex className="w-full h-auto border-8 border-yellow-400 pl-5">
        <Flex justify="center" direction="col" className="">
          <Framer className="text-2xl rounded-lg w-10 h-10">🤖</Framer>
        </Flex>
        <Flex className="break-normal p-10 border">
          <Flex className="whitespace-pre-wrap break-words text-green-400">
            {finalText}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OpenAIChat;
