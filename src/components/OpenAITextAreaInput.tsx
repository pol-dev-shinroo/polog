import React, { useState } from "react";
import { styled } from "twin.macro";
import { useOpenAIInput } from "src/hooks";

const TextArea: React.FC = () => {
  const [textareaHeight, setTextareaHeight] = useState<string>("35px");
  const { userInput, handleUserInput, addToChatArr } = useOpenAIInput();
  console.log(userInput);

  return (
    <StTextArea
      rows={1}
      style={{
        maxHeight: "200px",
        height: textareaHeight,
        overflowY: "hidden",
      }}
      className="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 md:pl-0"
      onInput={(e) => {
        const textarea = e.currentTarget;
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
        setTextareaHeight(textarea.style.height);
      }}
      placeholder="write text here"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addToChatArr();
        }
      }}
      onChange={handleUserInput}
      value={userInput}
    ></StTextArea>
  );
};

const StTextArea = styled.textarea`
  outline: none;
`;

export default TextArea;
