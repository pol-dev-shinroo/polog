import { useState } from "react";
import { useRecoilState } from "recoil";
import { OpenAIChatArrAtom } from "src/atoms/write";
import { getOpenAIResponse } from "src/api/openAI";

const useOpenAIInput = () => {
  /** total chat arr */
  const [chatArr, setChatArr] = useRecoilState(OpenAIChatArrAtom);
  console.log(chatArr);

  /**userInput */
  const [userInput, setUserInput] = useState("");
  const handleUserInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setUserInput(value);
  };

  /**user Input generated => call openAI API => add to chatArr */
  const addToChatArr = async () => {
    setChatArr((prev) => {
      return [...prev, { type: "user", text: "" }];
    });
    const res = await getOpenAIResponse({ userInput: userInput });
    setChatArr((prev) => {
      return [...prev, { type: "ai", text: res.choices[0].text }];
    });
    console.log(res);
    setUserInput("");
  };

  return { chatArr, addToChatArr, userInput, handleUserInput };
};

export default useOpenAIInput;
