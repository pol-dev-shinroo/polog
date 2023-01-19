import { useState } from "react";
import { useRecoilState } from "recoil";
import { writeTagNameAtom } from "src/atoms/write";

const useTagName = () => {
  const [writeTagNames, setWriteTagNames] = useRecoilState(writeTagNameAtom);

  const [newTags, setNewTags] = useState("");

  const handleWriteNewTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setNewTags(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const isTagExist = writeTagNames.find((tag) => tag === newTags);
      if (!isTagExist && newTags.length !== 0) {
        setWriteTagNames([...writeTagNames, newTags]);
        setNewTags("");
      }
    }
  };
  return { writeTagNames, newTags, handleWriteNewTags, handleKeyPress };
};

export default useTagName;
