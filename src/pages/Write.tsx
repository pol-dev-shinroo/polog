import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const Write = () => {
  const [markdownValue, setMarkdownValue] = useState<string | undefined>("");

  return (
    <div>
      <div>
        <h3>Markdown Input</h3>
        <MDEditor value={markdownValue} onChange={setMarkdownValue} />
      </div>
    </div>
  );
};

export default Write;
