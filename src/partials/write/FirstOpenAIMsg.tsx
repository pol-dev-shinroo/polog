import { useState, useEffect } from "react";
import { FramerFlex, Framer } from "src/elements";
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
    <FramerFlex justify="start" className="w-full">
      <FramerFlex justify="center" direction="col" className="h-full pl-5">
        <Framer className="text-2xl rounded-lg w-10 h-10">🤖</Framer>
      </FramerFlex>
      <FramerFlex className="h-full break-normal p-10">
        <FramerFlex className="whitespace-pre-wrap break-words text-green-400">
          {toggleAtLeastOnce ? msg : finalText}
        </FramerFlex>
      </FramerFlex>
    </FramerFlex>
  );
};

export default FirstOpenAIMsg;
