import { useState } from "react";
import { useRecoilState } from "recoil";
import { OpenAIChatArrAtom } from "src/atoms/write";

const useOpenAIInput = () => {
  /** total chat arr */
  const [chatArr, setChatArr] = useRecoilState(OpenAIChatArrAtom);

  /**userInput */
  const [userInput, setUserInput] = useState("");
  const handleUserInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setUserInput(value);
  };

  const addToChatArr = (type: "user" | "ai") => {
    setChatArr((prev) => {
      return [...prev, { type, text: "" }];
    });
  };

  return { chatArr, addToChatArr, userInput, handleUserInput };
};

export default useOpenAIInput;
