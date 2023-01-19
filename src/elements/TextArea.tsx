import { useState, useRef, useEffect } from "react";
import { styled } from "twin.macro";
import {
  TOnChange,
  TClassName,
  TName,
  TId,
  TCols,
  TRows,
  TValue,
  TMaxRows,
} from "src/models";

type TTextArea = {
  onChange?: TOnChange;
  className?: TClassName;
  name?: TName;
  id?: TId;
  cols?: TCols;
  rows?: TRows;
  value: TValue;
  maxRows: TMaxRows;
};

const TextArea = ({ onChange, value, maxRows, className }: TTextArea) => {
  const [rowCount, setRowCount] = useState(1);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      const textAreaHeight = textArea.offsetHeight;
      const textHeight = textArea.scrollHeight;
      if (textHeight > textAreaHeight) {
        if (rowCount <= maxRows) {
          setRowCount((rowCount) => rowCount + 1);
        }
      }
    }
  }, [textAreaRef, rowCount, maxRows, value]);

  return (
    <StTextArea
      ref={textAreaRef}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      value={value}
      className={className}
      rows={rowCount}
      maxLength={179}
    ></StTextArea>
  );
};

const StTextArea = styled.textarea`
  resize: none;
  overflow: hidden;
  min-height: 100%;
`;

export default TextArea;
