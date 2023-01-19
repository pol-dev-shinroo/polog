import React from "react";
import { useRecoilState } from "recoil";
import { MDTextsAtom } from "src/atoms/write";
import { ContextStore } from "@uiw/react-md-editor";

const useMDEditor = () => {
  const [MDTexts, setMDTexts] = useRecoilState(MDTextsAtom);

  const handleMDChange = (
    value: string | undefined,
    event: React.ChangeEvent<HTMLTextAreaElement> | undefined,
    state: ContextStore | undefined
  ) => {
    setMDTexts(value);
    console.log(event);
  };
  return { MDTexts, handleMDChange };
};

export default useMDEditor;
