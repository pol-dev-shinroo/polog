import React, { useState } from "react";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";

const Write = () => {
  const [markdownValue, setMarkdownValue] = useState<string | undefined>("");
  const textAreaRef = React.createRef<HTMLTextAreaElement>();

  const handleChange = (
    value: string | undefined,
    event: React.ChangeEvent<HTMLTextAreaElement> | undefined,
    state: ContextStore | undefined
  ) => {
    setMarkdownValue(value);
    console.log(event);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      // // event.preventDefault();
      // // const textArea = event.target as HTMLTextAreaElement;
      // // const cursorPos = textArea.selectionStart;
      // // setMarkdownValue(
      // //   textArea.value.slice(0, cursorPos) +
      // //     "\n" +
      // //     textArea.value.slice(cursorPos)
      // // );
      // alert("hi");
    }
  };
  return (
    <div data-color-mode="dark">
      <h3>Markdown Input</h3>
      <MDEditor
        fullscreen={true}
        value={markdownValue}
        onChange={setMarkdownValue}
      />
    </div>
  );
};

export default Write;
