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
  maxRows?: TMaxRows;
  readOnly?: boolean;
  placeholder?: string;
  style?: {};
};

const WriteHeaderTextArea = ({
  onChange,
  value,
  maxRows,
  className,
  readOnly,
  placeholder,
  style,
}: TTextArea) => {
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
        if (maxRows) {
          if (rowCount <= maxRows) {
            setRowCount((rowCount) => rowCount + 1);
          }
        }
      }
    }
  }, [textAreaRef, rowCount, maxRows, value]);

  useEffect(() => {
    if (value.length === 0) {
      setRowCount(1);
    }
  }, [value]);

  return (
    <StTextArea
      ref={textAreaRef}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      value={value}
      className={className}
      rows={rowCount}
      maxLength={179}
      readOnly={readOnly}
      placeholder={placeholder}
      style={style}
    ></StTextArea>
  );
};

const StTextArea = styled.textarea`
  resize: none;
  overflow: hidden;
  min-height: 100%;
  outline: none;
`;

export default WriteHeaderTextArea;
