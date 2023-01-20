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
    <FramerFlex justify="start" className="w-full border-8 border-red-500">
      <FramerFlex
        justify="start"
        direction="col"
        className="h-full border-4 border-yellow-600"
      >
        <Framer className="text-2xl border rounded-lg w-10 h-10">🤖</Framer>
      </FramerFlex>
      <FramerFlex className="h-full break-normal border-4 border-blue-600">
        <FramerFlex className="whitespace-pre-wrap break-all text-slate-50">
          {toggleAtLeastOnce ? msg : finalText}
        </FramerFlex>
      </FramerFlex>
    </FramerFlex>
  );
};

export default FirstOpenAIMsg;
